<template>
    <div class="warning">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <div class="slot">
            <slot></slot>
        </div>
    </div>
</template>

<style>
.warning {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    text-align: left;
    background-color: #FFC107;
    padding: 0.5rem 1.5rem;
    margin-block: 0.5rem;
}

.warning i {
    font-size: large;
}

.warning .slot {
    color: black;
}

.warning a {
    color: black;
    text-decoration: underline;
    font-weight: bold;
}

.warning p {
    color: black;
}
</style>