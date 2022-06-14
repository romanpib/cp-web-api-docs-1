<script>
    export default {
        props: {
            title: {type: String, required: true},
            url: {type: String, required: true},
            content: {type: String, required: true}
        },
    }
</script>

<template>
    <div class="download-card">
        <div class="header">
            <a :href="url" target="_blank">
            <span>{{ title }}</span>
            <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
            </a>
        </div>
        <div class="content">
            <p>{{ content }}</p>
        </div>
    </div>
</template>

<style>
    .download-card {
        margin-bottom: 1.25rem;
        background-color: #f5f5f5;
        font-size: small;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }

    .download-card .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #344D78;
        color: white;
        padding: 1rem 0.75rem;
    }

    .download-card a {
        color: white;
        text-decoration: none;
        font-size: medium;
    }

    .download-card .content p {
        margin: 0;
        padding: 1rem;
        height: 10%;
    }
</style>