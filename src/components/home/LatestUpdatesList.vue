<script>
import { useChangelogStore } from '@/stores/changelogStore'
import LatestUpdateCard from '@/components/home/LatestUpdateCard.vue'
export default {
    setup: () => ({store: useChangelogStore()}),
    data: () => ({numChanges: 3}),
    components: {
        LatestUpdateCard
    }
}
</script>

<template>
    <latest-update-card v-for="update in store.recentChanges(numChanges)" v-bind="update" />
</template>

