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
            let date = new Date(this.date);
            return date.toDateString();
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