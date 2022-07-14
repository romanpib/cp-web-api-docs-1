<script>
import { useAccountTypeStore } from '@/stores/accountTypeStore.js';
import { websocketsIndividual, websocketsInstitutional } from "@/docs/websockets";
import BaseLayout from "@/layouts/BaseLayout.vue";
import ScrollableSidenav from "@/components/ScrollableSidenav.vue";
import AccountToggle from '@/components/AccountToggle.vue'
import ArticleList from '../components/ArticleList.vue';
import WebsocketPlayground from '../components/websockets/WebsocketPlayground.vue';
import Warning from '../components/Warning.vue';
export default {
  components: {
    BaseLayout,
    ScrollableSidenav,
    AccountToggle,
    ArticleList,
    WebsocketPlayground,
    Warning
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
      return (store.accountType == 'individual') ? websocketsIndividual : websocketsInstitutional;
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
        <h2>Websockets</h2>
        <account-toggle id="active"/>
      </div>
      <article-list v-if="this.activeTab.length!=0" :articles="this.activeTab" @onArticleScroll="this.onScroll" />
      <h3>Websockets Playground</h3>
      <p>
        The following playground can be used to test the websockets functionality before implementing it in your application.
      </p>
      <warning>
        <p>
          In order to use the playground, you need to authenticate your session. See the
          <router-link to='/authentication'>authentication</router-link> page for
          getting started instructions.
        </p>
      </warning>
      <websocket-playground />
    </template>
    <template #aside>
      <scrollable-sidenav :sections="this.sections" :activeSection="this.activeSection" />
    </template>
  </base-layout>
</template>


<style scoped>
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