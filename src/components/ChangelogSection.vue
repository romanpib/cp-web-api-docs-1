<script>
import ChangelogTag from './ChangelogTag.vue';
export default {
    components: {
        ChangelogTag
    },
    props: {
        updateDate: { type: String, required: true },
        tags: { type: Array, required: true },
        content: { type: String, required: true }
    },
    computed: {
        humanReadableDate() {
            let date = new Date(this.updateDate);
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let year = date.getFullYear();
            return `${month}/${day}/${year}`;
        }
    }
}
</script>

<template>
    <!-- TODO Better date formatting,  -->
    <div class="section-container">
        <div class="section-header">
            <h3>{{ humanReadableDate }}</h3>
            <div class="tags">
                <span v-if="tags.length == 0">No tags</span>
                <changelog-tag v-for="tag in tags" :tag="tag" />
            </div>
        </div>
        <div>
            <p>{{ content }}</p>
        </div>
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