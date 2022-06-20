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
          content: 'Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper. Maecenas id fermentum sem.',
          url: 'https://www.interactivebrokers.com/en/?f=%2Fen%2Ftrading%2Fibgateway-stable.php'
        },
        {
          title: 'TWS API',
          content: 'Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper. Maecenas id fermentum sem. Etiam egestas lorem ac elit iaculis dignissim.',
          url: 'https://interactivebrokers.github.io/tws-api/introduction.html'
        },
        {
          title: 'Java',
          content: 'Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper. Maecenas id fermentum sem. Etiam egestas lorem ac elit iaculis dignissim.',
          url: 'https://java.com/en/'
        }
      ]
    }
  },
}
</script>

<template>
  <base-view>
    <template #content>
      <div class="page_header">
        <h2>Authentication</h2>
        <account-toggle />
      </div>
      <component :is="activeTab" />
    </template>
    <template #aside>
      <h2>Resources</h2>
      <DownloadCard v-for="download in downloads" v-bind="download" />
    </template>
  </base-view>
</template>

<style>
.page_header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>