<script>
import Navbar from '../../components/Navbar.vue'
export default {
    components: {
        Navbar
    }
}
</script>

<template>
    <div class="container">
        <navbar />
        <div class="content">
            <slot name="content"></slot>
        </div>
        <div class="aside">
            <slot name="aside"></slot>
        </div>
    </div>
</template>

<style scoped>

.container:not(:nth-child(1)) {
    padding-block: 2rem;
}

.content {
    padding: 2rem;
}

.aside {
    display: none;
}

@media only screen and (min-width: 1200px) {
    .container {
        display: flex;
        flex-direction: row;
    }
    
    .content {
        flex: 1;
        overflow: hidden;
        padding-top: 2rem;
    }

    .aside {
        width: 300px;
        background-color: #f5f5f5;
        overflow-y: auto;
        position: sticky;
        top: 0;
        right: 0;
        height: 100vh;
        display: block;
        padding-top: 2.75rem;
    }
}
</style>
