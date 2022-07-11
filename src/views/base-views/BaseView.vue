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
    <div class="container">
        <navbar />
        <div :class="(reverseWrap) ? 'main reverse' : 'main'">
            <div class="content">
                <slot name="content"></slot>
            </div>
            <div class="aside">
                <slot name="aside"></slot>
            </div>
        </div>
    </div>
</template>

<style>
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
    padding-bottom: 3rem;
}

.main.reverse {
    flex-direction: column-reverse;
}

.aside {
    width: 100%;
    padding-bottom: 1rem;
}

.toggle-switch {
    display: none;
}

@media only screen and (min-width: 700px) {
    .toggle-switch {
        display: block;
    }

    .container {
        flex-direction: row;
        align-items: flex-start;
    }

    .container > div {
        padding-top: 2rem;
    }

    .main {
        flex: 1;
        padding-inline: 2rem;
        flex-direction: column;
    }

    .content {
        flex: 1;
    }
}

@media only screen and (min-width: 1200px) {
    .main {
        flex-direction: row;
    }

    .main.reverse {
        flex-direction: row;
    }

    .aside {
        width: 300px;
        padding-left: 2rem;
        padding-bottom: 0;
    }
}
</style>