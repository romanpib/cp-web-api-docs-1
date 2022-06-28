<script>
import Navbar from '../../components/Navbar.vue'
export default {
    props: {
        reverseWrap: { type: Boolean, required: false, default: false }
    },
    components: {
        Navbar
    }
}
</script>

<template>
    <div :class="(reverseWrap) ? 'container reverse' : 'container'">
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
.content {
    padding-inline: 1rem;
}

.aside {
    padding-inline: 1rem;
    padding-bottom: 2rem;
}

@media only screen and (min-width: 1100px) {
    .container {
        display: flex;
        flex-direction: row;
    }
    
    .content {
        padding-top: 2rem;
        flex: 1;
    }

    .aside {
        width: 300px;
        padding-top: 2rem;
        padding-right: 2rem;
        padding-left: 0rem;
    }
}
</style>