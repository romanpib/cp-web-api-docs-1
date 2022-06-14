<script>
export default {
    props: {
        title: { type: String, required: true },
        content: { type: String, required: true }
    },
    methods: {
        toggleExpanded() {
            let cardContent = this.$el.querySelector('.content');
            let icon = this.$el.querySelector('i');
            if (cardContent.hidden) {
                cardContent.hidden = false;
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
            else {
                cardContent.hidden = true;
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        }
    }
}
</script>

<template>
    <div class="expandable-card">
        <div class="header" @click="toggleExpanded">
            <span>{{ title }}</span>
            <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div class="content" hidden>
            <p>{{ content }}</p>
        </div>
    </div>
</template>

<style>
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
    padding: 0.75rem;
}

.expandable-card .content p {
    margin: 0;
    padding: 1rem;
}
</style>