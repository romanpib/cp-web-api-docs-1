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
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    overflow: auto;
    margin-right: 300px;
}

.content {
    flex: 1;
    padding: 2.5rem 2rem;
}

.aside {
    position: fixed;
    top: 0;
    right: 0;
    padding-top: 3rem;
    width: 300px;
    background-color: #f5f5f5;
    height: 100vh;
    overflow-y: auto;
}

@media only screen and (max-width: 1100px) {
    .container {
        margin-right: 0;
    }

    .aside {
        display: none;
    }

    .content {
        margin-right: 0;
    }
}
</style>
