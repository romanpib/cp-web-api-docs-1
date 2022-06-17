<script>
import LatestUpdateCard from './LatestUpdateCard.vue'
export default {
    props: {
        updates: { type: Array, required: true }
    },
    components: {
        LatestUpdateCard
    },
    computed: {
        latestUpdates() {
            // Return the last three updates, sorted by date
            return this.updates.sort((a, b) => {
                return Date.parse(b.date) - Date.parse(a.date);
            }).slice(0, 3);
        }
    }
}
</script>

<template>
    <latest-update-card v-for="update in latestUpdates" v-bind="update" />
</template>

