<script>
export default {
    props: 
    {
        tag: { type: String, required: true }
    },
    methods: {
        toggleFilter(event) {
            let target = event.currentTarget; // currentTarget targets the actual element that contains the event listener
            target.id == ""
                ? target.id = "active"
                : target.id = "";
            this.$emit('toggleActive', this.tag);
        }
    }
}
</script>

<template>
    <div @click="toggleFilter" class="filter-container">
        <span>{{ tag }}</span>
    </div>
</template>

<style>
.filter-container {
    background-color: #344D78;
    color: white;
    font-size: small;
    width: fit-content;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
}

#active {
    background-color: #5E7D99;
}
</style>
