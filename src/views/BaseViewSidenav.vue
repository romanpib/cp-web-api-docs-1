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
    justify-content: space-between;
}

.content {
    flex: 1;
    padding: 2rem 2.5rem;
    margin-right: 250px;
}

.aside {
    position: fixed;
    width: 250px;
    background-color: #f5f5f5;
    padding-block: 2.5rem;
    top: 0;
    right: 0;
    height: 100vh;
    overflow-y: auto;
}

@media only screen and (max-width: 1200px) {
    .aside {
        display: none;
    }

    .content {
        flex: 1;
        padding: 2rem 2.5rem;
        margin-right: 0;
    }
}
</style>
