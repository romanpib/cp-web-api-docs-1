<script>
import { useAccountTypeStore } from '@/stores/accountTypeStore.js';
import { websocketsIndividual, websocketsInstitutional } from "@/docs/websockets";
import BaseViewSidenav from "@/views/base-views/BaseViewSidenav.vue";
import ScrollableSidenav from "@/components/ScrollableSidenav.vue";
import AccountToggle from '@/components/AccountToggle.vue'
import WebsocketPlayground from '@/components/websockets/WebsocketPlayground.vue'
import Warning from '@/components/Warning.vue';
import ArticleList from '../components/ArticleList.vue';
export default {
  components: {
    BaseViewSidenav,
    ScrollableSidenav,
    AccountToggle,
    WebsocketPlayground,
    Warning,
    ArticleList
  },
  setup: () => ({store: useAccountTypeStore()}),
  created() {
    document.addEventListener('scroll', this.onScroll);
  },
  deactivated() {
    document.removeEventListener('scroll', this.onScroll);
  },
  mounted() {
    // On mounted is called after the component's DOM is rendered, hence the get here
    let elements = Array.prototype.slice.call(document.getElementsByTagName('h4'));
    this.elementToIdMap = elements.reduce((result, ele) => {
      let top = ele.getBoundingClientRect().top;
      result[top] = ele.id;
      return result
    }, {})
  },
  data() {
    return {
      activeSectionID: null,
      elementToIdMap: null 
    }
  },
  methods: {
    onScroll() {
      let scrollPosition = window.scrollY;
      let keys = Object.keys(this.elementToIdMap);
      for (var i = 0; i < keys.length; i++) {
        if (keys[i] > scrollPosition) {
          this.activeSectionID = this.elementToIdMap[keys[i]];
          break;
        }
      }
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
      return (this.store.accountType == 'individual') ? websocketsIndividual : websocketsInstitutional;
    },
    activeSection() {
      return this.activeSectionID || this.sections[0].titles[0].id;
    }
  }
}
</script>

<template>
  <base-view-sidenav>
    <template #content>
      <div class="page_header">
        <h2>Websockets</h2>
        <account-toggle />
      </div>
      <article-list :articles="this.activeTab" />
      <websocket-playground />
    </template>
    <template #aside>
      <scrollable-sidenav :sections="this.sections" :activeSection="this.activeSection" />
    </template>
  </base-view-sidenav>
</template>

<style>
.page_header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>