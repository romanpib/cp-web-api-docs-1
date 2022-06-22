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