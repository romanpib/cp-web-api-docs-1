<script>
export default {
    methods: {
        onAccountToggle(event) {
            let targetId = event.target.id;
            if (!targetId) {
                return;
            }
            this.accountType = targetId;
            localStorage.setItem("accountType", this.accountType);
            this.$emit('accountToggled', this.accountType);
        }
    },
    data() {
        return {
            accountType: localStorage.getItem("accountType") || "individual"
        }
    }
}
</script>

<template>
    <div class="toggle-switch" @click="onAccountToggle">
        <button id="individual" :class="(this.accountType == 'individual') ? 'active' : ''">Individual</button>
        <button id="institutional" :class="(this.accountType == 'institutional') ? 'active' : ''">Institutional</button>
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