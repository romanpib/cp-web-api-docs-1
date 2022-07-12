<template>
    <div class="warning-message">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <slot></slot>
    </div>
</template>

<style>
.warning-message {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    text-align: left;
    background-color: #FFC107;
    padding: 0.5rem 1.5rem;
    margin-block: 0.5rem;
}

.warning-message i {
    font-size: large;
}

.warning-message a {
    color: black; 
    font-weight: bold;
}
</style>