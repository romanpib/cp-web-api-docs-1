<script>
import ArticleListItem from '@/components/ArticleListItem.vue'
export default {
    props: {
        articles: {type: Array, required: true}
    },
    components: {
        ArticleListItem
    }
}
</script>

<template>
    <div v-for="article in this.articles">
        <h3>{{ article.category }}</h3>
        <article-list-item v-for="item in article.items" v-bind="item" />
    </div>
</template>