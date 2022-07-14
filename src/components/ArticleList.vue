<script>
import ArticleListItem from '@/components/ArticleListItem.vue'
export default {
    props: {
        articles: {type: Array, required: false}
    },
    components: {
        ArticleListItem
    },
    methods: {
        mapArticlesToIDs() {
            let elements = Array.prototype.slice.call(document.getElementsByTagName('h4'));
            this.elementToIdMap = elements.reduce((result, ele) => {
                // Get the offset of the header relative to the top of the document
                let offset = ele.offsetTop;
                result[offset] = ele.id;
                return result
            }, {})
        },
        onScroll() {
            let currentScrollPosition = window.scrollY;
            let scrollPositionOffset = 25;
            let elementToIdMap = this.elementToIdMap;
            let activeSectionID = null;
            for (let eleOffset in elementToIdMap) {
                if (parseFloat(eleOffset) >= currentScrollPosition - scrollPositionOffset) {
                    activeSectionID = elementToIdMap[eleOffset];
                    return this.$emit('onArticleScroll', activeSectionID);
                }
            }
        }
    },
    created() {
        document.addEventListener('scroll', this.onScroll)
    },
    updated() {
        this.mapArticlesToIDs();
    },
    unmounted() {
        document.removeEventListener('scroll', this.onScroll)
    },
    mounted() {
        this.mapArticlesToIDs();
    },
    data() {
        return {elementToIdMap: null}
    },
}
</script>

<template>
    <div v-for="article in this.articles">
        <h3>{{ article.category }}</h3>
        <article-list-item v-for="item in article.items" v-bind="item" />
    </div>
</template>