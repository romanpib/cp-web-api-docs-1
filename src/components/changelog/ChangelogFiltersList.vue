<script>
import ChangelogFilter from './ChangelogFilter.vue';
export default {
    components: {
        ChangelogFilter
    },
    props: {
        filters: { type: Array, required: true }
    },
    methods: {
        onFilterClickedHandler(filter) {
            this.activeFilters.includes(filter)
                ? this.activeFilters = this.activeFilters.filter(tag => tag !== filter)
                : this.activeFilters.push(filter);
            this.$emit('filterClick', this.activeFilters);
        }
    },
    data() {
        return {
            activeFilters: []
        }
    }
}
</script>

<template>
    <div class="changelog-filters-list">
        <changelog-filter 
            v-for="(filter, index) in filters"
            :tag="filter"
            :isActive="this.activeFilters.includes(filter)" 
            :key="index" 
            @click="onFilterClickedHandler(filter)" 
        />
    </div>
</template>

<style>
.changelog-filters-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.changelog-filters-list > *{
    cursor: pointer;
}
</style>