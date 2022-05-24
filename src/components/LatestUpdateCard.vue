<script>
    export default {
        props: {
            title: { type: String, required: true},
            content: {type: String, required: true},
            updateDate: {type: String, required: true}
        }
    }
</script>

<template>
    <div class="latest-update-card">
        <div class="header">
            <span>{{ title }}</span>
            <span>{{ updateDate }}</span>
        </div>
        <div class="content">
            <p>{{ content }}</p>
        </div>
    </div>
</template>

<style>
    .latest-update-card {
        margin-bottom: 1.25rem;
        background-color: #f5f5f5;
        font-size: small;
    }

    .latest-update-card .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #DB1222;
        color: white;
        padding: 1rem 0.75rem;
    }

    .latest-update-card .content p {
        margin: 0;
        padding: 1rem;
        height: 10%;
    }
</style>