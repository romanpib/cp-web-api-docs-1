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

<style>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        gap: 50px;
        padding-inline: 50px;
    }

    .content {
        flex: 2;
    }

    .aside {
        flex: 1;
    }
</style>