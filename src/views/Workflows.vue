<script>
import BaseViewSidenav from "./BaseViewSidenav.vue";
import ScrollableSidenav from "@/components/ScrollableSidenav.vue";
import AccountToggle from '@/components/AccountToggle.vue'
import { workflowsIndividual, workflowsInstitutional } from "@/docs/workflows";

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
      return (this.accountType === 'individual') ? workflowsIndividual : workflowsInstitutional;
    }
  },
  methods: {
    onAccountToggleClicked(accountType) {
      this.accountType = accountType;
    },
  },
  data() {
    return {
      accountType: localStorage.getItem('accountType') || 'individual'
    };
  }
}
</script>

<template>
  <base-view-sidenav>
    <template #content>
      <div class="page_header">
        <h2>Workflows</h2>
        <account-toggle @account-toggled="onAccountToggleClicked" />
      </div>
      <template v-for="section in activeTab">
        <h3>{{ section.category }}</h3>
        <template v-for="article in section.items">
          <h4 :id="`${article.id}`">{{ article.title }}</h4>
          <p>{{ article.content }}</p>
        </template>
      </template>
    </template>
    <template #aside>
      <scrollable-sidenav :sections="sections" />
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