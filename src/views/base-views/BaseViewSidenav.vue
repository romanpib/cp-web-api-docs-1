<script>
import Navbar from '@/components/Navbar.vue'
export default {
    components: {
        Navbar
    }
}
</script>

<template>
    <div class="container">
        <navbar />
        <div class="main">
            <div class="content">
                <slot name="content"></slot>
            </div>
            <div class="aside">
                <slot name="aside"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
}

.main {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-inline: 1.5rem;
    padding-bottom: 2rem;
}

.aside {
    display: none;
}

@media only screen and (min-width: 700px) {
    .container {
        flex-direction: row;
        align-items: flex-start;
    }

    .main {
        flex-direction: column;
        padding-inline: 2rem;
        padding-block: 0;
    }

    .content {
        padding-block: 2rem;
        flex: 1;
    }
}

@media only screen and (min-width: 1200px) {
    .main {
        flex-direction: row;
        padding-left: 2rem;
        padding-right: 0;
        padding-top: 0;
    }

    .content {
        padding-top: 2rem;
        padding-right: 2rem;
    }

    .aside {
        display: block;
        position: sticky;
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        background-color: #F5F5F5;
        padding-top: 2.5rem;
        padding-left: 0;
    }
}
</style>
