<script>
import { useAccountTypeStore } from '@/stores/accountTypeStore.js';
import BaseView from '@/views/base-views/BaseView.vue'
import DownloadCard from '@/components/DownloadCard.vue'
import QuickstartIndividual from '@/components/quickstart/QuickstartIndividual.vue'
import QuickstartInstitutional from '@/components/quickstart/QuickstartInstitutional.vue'
import AccountToggle from '@/components/AccountToggle.vue'
export default {
  components: {
    BaseView,
    DownloadCard,
    QuickstartIndividual,
    QuickstartInstitutional,
    AccountToggle
  },
  computed: {
    activeTab() {
      const store = useAccountTypeStore()
      return (store.accountType == 'individual') ? 'QuickstartIndividual' : 'QuickstartInstitutional';
    }
  },
  data() {
    return {
      downloads: [
        {
          title: 'API Gateway',
          content: 'Download a latest version of the Client Portal API gateway.',
          url: 'https://download2.interactivebrokers.com/portal/clientportal.gw.zip'
        },
        {
          title: 'Java',
          content: 'Download the latest version of the Java SDK.',
          url: 'https://www.java.com/en/download/'
        }
      ]
    }
  },
}
</script>

<template>
  <base-view>
    <template #content>
      <div class="content-header">
        <h2>Quickstart Guide</h2>
        <account-toggle />
      </div>
      <component :is="activeTab" />
    </template>
    <template #aside>
      <h2>Downloads</h2>
      <download-card v-for="download in downloads" v-bind="download" />
    </template>
  </base-view>
</template>

<style scoped>
.content-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>