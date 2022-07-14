<script>
export default {
    props: {
        title: { type: String, required: true },
        content: { type: String, required: true },
        isExpanded: { type: Boolean, default: false, required: false },
    },
    data() {
        return {
            isHidden: this.isExpanded
        }
    },
    methods: {
        toggleContent() {
            let cardContent = this.$el.querySelector('.content');
            cardContent.hidden = !this.isHidden;
            this.toggleDropdownStatusIcon();
            this.isHidden = !this.isHidden;
        },
        toggleDropdownStatusIcon() {
            let icon = this.$el.querySelector('i');
            if (this.isHidden) {
                icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
            } else {
                icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
            }
        }
    }
}
</script>

<template>
    <div class="expandable-card">
        <div class="header" @click="toggleContent">
            <h4>{{ title }}</h4>
            <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div class="content" :hidden="!isHidden">
            <span v-html="content"></span>
        </div>
    </div>
</template>

<style scoped>
.expandable-card {
    margin-bottom: 1.25rem;
    background-color: #f5f5f5;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.expandable-card .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background-color: #344D78;
    color: white;
    padding: 1rem 0.75rem;
    gap: 1rem;
}

.expandable-card .header h4 {
    margin: 0;
    font-weight: normal;
}

.expandable-card .content {
    color: black;
    margin-block: 0.5rem;
    padding: 0.75rem 0.75rem;
}

.expandable-card .content a {
    color: black;
    font-weight: bold;
}
</style>