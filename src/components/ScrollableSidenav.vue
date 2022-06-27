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
    }
}
</script>

<template>
    <template v-for="section in sections">
        <h3 class="section">{{ section.category }}</h3>
        <div class="subsections">
            <a v-for="item in section.titles" :class="(item.id === this.activeSection) ? 'active' : null" :href="`#${item.id}`">{{ item.title }}</a>
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
}

.subsections a {
    text-decoration: none;
    color: #000;
    display: block;
    font-size: small;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
}

.subsections a.active {
    color: #fff;
    background-color: #344D78;
}
</style>