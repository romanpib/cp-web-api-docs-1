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
    <div class="section-container">
        <div class="section-header">
            <h3>{{ humanReadableDate }}</h3>
            <div class="tags">
                <span v-if="tags.length == 0">No tags</span>
                <changelog-filter v-for="tag in tags" :tag="tag" />
            </div>
        </div>
        <p>{{ description }}</p>
        <ul>
            <li v-for="change in changes">{{ change }}</li>
        </ul>
        <hr>
    </div>
</template>

<style>
.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.section-header h3 {
    margin: 0;
    font-weight: normal;
}

.section-header .tags {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.section-container hr {
    margin-block: 2rem;
    height: 1px;
    border: 0;
    background-color: #e5e5e5;
}
</style>