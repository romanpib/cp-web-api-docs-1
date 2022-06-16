<template>
    <div class="container">
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
        display: flex;
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
}
</style>
