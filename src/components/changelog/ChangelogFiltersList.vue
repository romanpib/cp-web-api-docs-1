<script>
import { useChangelogStore } from '@/stores/changelogStore';
import ChangelogFilter from '@/components/changelog/ChangelogFilter.vue';
export default {
    setup: () => ({store: useChangelogStore()}),
    components: {
        ChangelogFilter
    }
}
</script>

<template>
    <div class="header">
        <h2>Filter changes</h2>
        <a v-if="store.activeFilters.length != 0" @click="store.clearFilters">Clear all</a>
    </div>
    <div class="changelog-filters-list">
        <changelog-filter 
            v-for="(filter, index) in store.changelogTags"
            :tag="filter"
            :isActive="store.activeFilters.includes(filter)"
            :key="index"
            @click="store.toggleFilter(filter)" 
        />
    </div>
</template>

<style scoped>
.changelog-filters-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.changelog-filters-list > *{
    cursor: pointer;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1rem;
}

.header a {
    text-decoration: underline;
    color: #db1222;
    font-size: small;
    font-weight: bold;
    cursor: pointer;
}
</style>