<script>
import { useAccountTypeStore } from '@/stores/accountTypeStore.js';
import { workflowsIndividual, workflowsInstitutional } from "@/docs/workflows";
import BaseViewSidenav from "@/views/base-views/BaseViewSidenav.vue";
import ScrollableSidenav from "@/components/ScrollableSidenav.vue";
import AccountToggle from '@/components/AccountToggle.vue'

export default {
  components: {
    BaseViewSidenav,
    ScrollableSidenav,
    AccountToggle
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
    }
  },
  methods: {
    onSectionClicked(id) {
      this.activeSection = id;
    }
  },
  data() {
    return {
      // TODO This is a hack to get the active section to be set to the first one. Make sure it's the first element in the array.
      activeSection: "snapshot-data"
    };
  }
}
</script>

<template>
  <base-view-sidenav>
    <template #content>
      <div class="page_header">
        <h2>Workflows</h2>
        <account-toggle />
      </div>
      <template v-for="section in activeTab">
        <h3>{{ section.category }}</h3>
        <template v-for="article in section.items">
          <h4 :id="`${article.id}`">{{ article.title }}</h4>
          <component :innerHTML="article.content" />
        </template>
      </template>
    </template>
    <template #aside>
      <scrollable-sidenav :sections="sections" :activeSection="this.activeSection" @sectionClicked="onSectionClicked" />
    </template>
  </base-view-sidenav>
</template>

<style>
.page_header {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

div.code {
  width: 100%;
  background-color: black;
  padding: 1rem 1.5rem;
}

code {
  color: white;
}
</style>