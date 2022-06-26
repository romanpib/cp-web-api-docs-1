<script>
import ChangelogFilter from './ChangelogFilter.vue';

export default {
    props: {
        date: { type: String, required: true },
        description: { type: String, required: true },
        tags: { type: Array, required: true },
        changes: { type: Array, required: true }
    },
    components: {
        ChangelogFilter
    },
    computed: {
        humanReadableDate() {
            // Convert the date to the format "Saturday, January 1, 2020"
            const date = new Date(this.date);
            const day = date.toLocaleDateString('en-US', { weekday: 'long' });
            const month = date.toLocaleDateString('en-US', { month: 'long' });
            const dayNum = date.getDate();
            const dayNumPostfix = dayNum % 10 === 1 && dayNum !== 11 ? 'st' : dayNum % 10 === 2 && dayNum !== 12 ? 'nd' : dayNum % 10 === 3 && dayNum !== 13 ? 'rd' : 'th';
            const year = date.getFullYear();
            return `${day}, ${month} ${dayNum}${dayNumPostfix}, ${year}`;
        }
    }
}
</script>

<template>
    <div class="section-header">
        <h3>{{ humanReadableDate }}</h3>
        <div>
            <changelog-filter v-for="tag in tags" :tag="tag" />
        </div>
    </div>
    <p>{{ description }}</p>
    <ul>
        <li v-for="change in changes">{{ change }}</li>
    </ul>
    <hr>
</template>

<style scoped>
.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.section-header h3 {
    font-size: large;
    font-weight: normal;
}

.section-header > div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
}

hr {
    margin-block: 2rem;
    height: 1px;
    border: 0;
    background-color: #e5e5e5;
}
</style>