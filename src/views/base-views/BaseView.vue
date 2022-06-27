<script>
export default {
    props: {
        reverseWrap: {type: Boolean, required: false, default: false}
    }
}
</script>

<template>
    <div :class="(reverseWrap) ? 'container reverse' : 'container'">
        <div class="content">
            <slot name="content"></slot>
        </div>
        <div class="aside">
            <slot name="aside"></slot>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
}

.content {
    flex: 1;
    padding: 2.5rem 2rem;
}

.aside {
    width: 300px;
    padding-block: 2.5rem;
    padding-right: 2rem;
}

@media only screen and (max-width: 1100px) {
    .container {
        flex-direction: column;
    }

    .content {
        width: inherit;
        padding-right: 2rem;
        padding-bottom: 0;
    }

    .aside {
        width: inherit;
        padding-inline: 2rem;
        padding-top: 0;
    }

    .container.reverse {
        flex-direction: column-reverse;
    }

    .container.reverse .content {
        padding-block: 0;
        padding-bottom: 2.5rem;
    }

    .container.reverse .aside {
        padding-top: 2.5rem;
    }
}
</style>
