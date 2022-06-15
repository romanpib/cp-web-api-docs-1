<script>
export default {
    props: {
        sections: {
            type: Array,
            required: true
        },
        activeSection: {
            type: String,
            required: true
        }
    },
    methods: {
        onSectionSelect(event) {
            this.$emit('select', event.target.href);
        }
    }
}
</script>

<template>
    <template v-for="section in sections">
        <h3 class="section">{{ section.category }}</h3>
        <div class="subsections">
            <a v-for="item in section.titles" @click="onSectionSelect" :href="`#${item.id}`" :class="(item.id === this.activeSection) ? 'active' : null">{{ item.title }}</a>
        </div>
    </template>
</template>

<style scoped>
    .section {
        padding: 0.5rem 1rem;
        margin: 0;
    }

    .subsections {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.5rem 2rem;
    }

    .subsections a {
        text-decoration: none;
        color: #000;
        display: block;
    }

    .subsections a.active {
        color: #fff;
        background-color: #344D78;
    }
</style>