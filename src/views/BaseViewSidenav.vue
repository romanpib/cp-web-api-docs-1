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
    padding-inline: 2rem;
    max-width: 800px;
    padding-top: 2.5rem;
}

.aside {
    width: 250px;
    background-color: #f5f5f5;
    padding-top: 0.5rem;
}

@media only screen and (max-width: 1200px) {
  .aside {
    display: none;
  }
}
</style>
