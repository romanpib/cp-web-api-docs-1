<script>
import WebsocketMessage from './WebsocketMessage.vue';
export default {
    components: {
        WebsocketMessage
    },
    methods: {
        connect() {
            if (this.connected) {
                return;
            }
            this.socket = new WebSocket(this.url);
            this.socket.onopen = () => {
                this.connected = true;
                this.socket.addEventListener('message', event => {
                    this.onMessageReceived(event);
                });
                this.messages.push({
                    type: 'outbound',
                    message: `Connected to websocket server: ${this.url}`
                });
            };
        },
        disconnect() {
            if (!this.connected) {
                return;
            }
            this.socket.close();
            this.connected = false;
        },
        sendMessage() {
            if (!this.connected) {
                console.log('socket not connected');
                return;
            }
            this.socket.send(this.currentMessage);
            this.messages.push({
                type: 'outbound',
                message: this.currentMessage
            });
        },
        onMessageReceived(event) {
            this.messages.push({
                type: 'inbound',
                message: event.data
            });
        }
    },
    data() {
        return {
            connected: false,
            url: 'wss://localhost:5000/v1/api/ws',
            socket: null,
            currentMessage: '',
            messages: []
        }
    }
}
</script>

<template>
    <div class="playground-container">
        <div class="playground-row">
            <span>URL:</span>
            <input type="url" v-model="this.url" />
            <div class="buttons">
                <button id="connect" @click="connect">Connect</button>
                <button id="disconnect" @click="disconnect">Disconnect</button>
            </div>
        </div>
        <div class="playground-row">
            <span>Message:</span>
            <input type="text" v-model="this.currentMessage" />
            <div class="buttons">
                <button id="send" @click="sendMessage">Send</button>
            </div>
        </div>
        <div>
            <span>Output:</span>
            <div class="playground-output-container">
                <div v-for="(message, index) in messages">
                    <websocket-message v-bind="message" :key="index" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.playground-container {
    margin-top: 1rem;
    border: 1px solid #e0e0e0;
    padding: 1rem;
}

.playground-row {
    display: flex;
    flex-direction: row;
    padding: 0.5rem 0;
    gap: 1rem;
}

.playground-row span {
    width: 10%;
}

.playground-row input {
    flex: 4;
    padding-inline: 1rem;
    border: 1px solid #e0e0e0;
}

.playground-row .buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1rem;
    flex: 1;
}

.playground-container button {
    border: none;
    padding: 0.5rem 1rem;
    color: white;
}

button#connect {
    background-color: green;
}

button#disconnect {
    background-color: #db1222;
}

button#send {
    background-color: #344D78;
}

.playground-output-container {
    margin-top: 1rem;
    height: 600px;
    background-color: #f5f5f5;
    overflow-y: scroll;
}
</style>