<script>
    export default {
        props: {
            message: {type: String, required: true}
        }
    }
</script>

<template>
    <div class="warning-message">
        <slot></slot>
    </div>
</template>

<style>
    .warning-message {
        text-align: center;
        background-color: #FFC107;
        padding: 1.5rem;
    }
</style>