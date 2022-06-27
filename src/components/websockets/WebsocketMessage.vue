<script>
export default {
    props: {
        message: {type: String, required: true},
        type: {type: String, required: true}
    },
    computed: {
        messageIcon () {
            return (this.type == 'outbound') ? 'fa-solid fa-arrow-right' : 'fa-solid fa-arrow-left'
        }
    }
}
</script>

<template>
    <div class="message">
        <i :class="this.messageIcon"></i>
        <span>{{ this.message }}</span>
    </div>
</template>

<style>
.message {
    display: flex;
    flex: row;
    align-items: center;
    padding: 0.5rem 1rem;
    gap: 1rem;
}
</style>