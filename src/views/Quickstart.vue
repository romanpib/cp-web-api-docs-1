<script>
import { useAccountTypeStore } from '@/stores/accountTypeStore.js';
import BaseView from './BaseView.vue'
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
          title: 'Gateway',
          content: 'Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper. Maecenas id fermentum sem.',
          url: 'https://www.interactivebrokers.com/en/?f=%2Fen%2Ftrading%2Fibgateway-stable.php'
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

<style>
.content-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>