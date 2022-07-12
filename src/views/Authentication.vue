<script>
import { useAccountTypeStore } from '@/stores/accountTypeStore.js';
import BaseView from '@/views/base-views/BaseView.vue'
import DownloadCard from '@/components/DownloadCard.vue'
import AuthenticationIndividual from '@/components/authentication/AuthenticationIndividual.vue'
import AuthenticationInstitutional from '@/components/authentication/AuthenticationInstitutional.vue'
import AccountToggle from '@/components/AccountToggle.vue'
export default {
  components: {
    BaseView,
    DownloadCard,
    AuthenticationIndividual,
    AuthenticationInstitutional,
    AccountToggle,
  },
  computed: {
    activeTab() {
      const store = useAccountTypeStore()
      return (store.accountType == 'individual') ? 'AuthenticationIndividual' : 'AuthenticationInstitutional';
    },
  },
  data() {
    return {
      downloads: [
        {
          title: 'Gateway',
          content: 'Download a latest version of the Client Portal API gateway.',
          url: 'https://download2.interactivebrokers.com/portal/clientportal.gw.zip'
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
        <h2>Authentication</h2>
        <account-toggle />
      </div>
      <component :is="activeTab" />
    </template>
    <template #aside>
      <h2>Resources</h2>
      <download-card v-for="download in downloads" v-bind="download" />
    </template>
  </base-view>
</template>

<style>
.content-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>