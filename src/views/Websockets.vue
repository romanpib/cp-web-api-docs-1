<script>
import { useAccountTypeStore } from '@/stores/accountTypeStore.js';
import { websocketsIndividual, websocketsInstitutional } from "@/docs/websockets";
import BaseViewSidenav from "@/views/base-views/BaseViewSidenav.vue";
import ScrollableSidenav from "@/components/ScrollableSidenav.vue";
import AccountToggle from '@/components/AccountToggle.vue'
import WebscoketPlayground from '@/components/websockets/WebsocketPlayground.vue'
import Warning from '@/components/Warning.vue';

export default {
  components: {
    BaseViewSidenav,
    ScrollableSidenav,
    AccountToggle,
    WebscoketPlayground,
    Warning
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
    }
  },
  methods: {
    onSectionClicked(id) {
      this.activeSection = id;
    }
  },
  data() {
    return {
      activeSection: "snapshot-data"
    };
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
      <template v-for="section in activeTab">
        <h3>{{ section.category }}</h3>
        <template v-for="article in section.items">
          <h4 :id="`${article.id}`">{{ article.title }}</h4>
          <component :innerHTML="article.content" />
        </template>
      </template>
      <div>
        <h3>Websockets Playground</h3>
        <p>
          Donec non arcu sollicitudin, hendrerit nisl vitae, ullamcorper ex. Etiam hendrerit nisl viverra lectus lacinia, sed semper ligula sagittis. Etiam efficitur tortor et sem pharetra vulputate. Ut vulputate tristique turpis vitae fringilla.
        </p>
        <warning>
          <span>In order to use the playground, you need to authetnticate your session. See the <router-link to='/authentication' style="color: black; font-weight: bold;">authentication</router-link> page for getting started instructions.</span>
        </warning>
        <webscoket-playground />
      </div>
    </template>
    <template #aside>
      <scrollable-sidenav :sections="sections" :activeSection="this.activeSection" @sectionClicked="onSectionClicked" />
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