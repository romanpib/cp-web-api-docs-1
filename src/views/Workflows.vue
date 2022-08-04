<script>
import { useAccountTypeStore } from '@/stores/accountTypeStore.js';
import { workflowsIndividual, workflowsInstitutional } from "@/docs/workflows";
import BaseLayout from "@/layouts/BaseLayout.vue";
import ScrollableSidenav from "@/components/ScrollableSidenav.vue";
import AccountToggle from '@/components/AccountToggle.vue'
import ArticleList from '../components/ArticleList.vue';
export default {
  components: {
    BaseLayout,
    ScrollableSidenav,
    AccountToggle,
    ArticleList
  },
  data() {
    return {
      activeSectionID: null
    }
  },
  methods: {
    onScroll(articleID) {
      this.activeSectionID = articleID;
    }
  },
  computed: {
    sections() {
      return this.activeTab.map(section => {
        return {
          category: section.category,
          titles: section.items.map(item => {
            return {
              id: item.id,
              title: item.title
            }
          })
        };
      });
    },
    activeTab() {
      const store = useAccountTypeStore();
      return (store.accountType == 'individual') ? workflowsIndividual : workflowsInstitutional;
    },
    activeSection() {
      return this.activeSectionID || this.sections[0].titles[0].id;
    }
  }
}
</script>

<template>
  <base-layout>
    <template #content>
      <div class="content-header">
        <h2>Workflows</h2>
        <account-toggle id="active"/>
      </div>
      <article-list :articles="this.activeTab" @onArticleScroll="this.onScroll" />
    </template>
    <template #aside>
      <scrollable-sidenav :sections="this.sections" :activeSection="this.activeSection" />
    </template>
  </base-layout>
</template>

<style>
.content-header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#active {
  display: none;
}

@media (min-width: 700px) {
  #active {
    display: block;
  }
}
</style>