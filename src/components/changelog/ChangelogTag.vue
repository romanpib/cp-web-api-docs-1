<script>
export default {
    props: {
        tag: { type: String, required: true }
    }
}
</script>

<template>
    <div class="tag-container">
        <span>{{ tag }}</span>
    </div>
</template>

<style>
.tag-container {
    background-color: #344D78;
    color: white;
    font-size: small;
    width: fit-content;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
}
</style>