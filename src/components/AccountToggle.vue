<script>
import { useAccountTypeStore } from '@/stores/accountTypeStore.js';
export default {
    setup() {
        const store = useAccountTypeStore();
        return {
            store
        }
    },
    methods: {
        onAccountToggled(event) {
            let clickedElement = event.target.id;
            if (!clickedElement) {
                return;
            }
            this.store.setAccountType(clickedElement);
        }
    }
}
</script>

<template>
    <div class="toggle-switch" @click="onAccountToggled">
        <button id="individual" :class="(store.accountType == 'individual') ? 'active' : ''">Individual</button>
        <button id="institutional" :class="(store.accountType == 'institutional') ? 'active' : ''">Institutional</button>
    </div>
</template>

<style>
.toggle-switch {
    display: flex;
    flex-direction: row;
    margin: 0;
    background-color: #f5f5f5;
    border-radius: 40px;
    color: white;
}

.toggle-switch button {
    background-color: #f5f5f5;
    border-radius: 40px;
    padding-inline: 0.75rem;
    padding-block: 0.5rem;
    border: none;
    cursor: pointer;
}

.toggle-switch button.active {
    background-color: #344D78;
    color: white;
}
</style>