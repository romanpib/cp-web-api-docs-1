<script>
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
      return (this.accountType === 'individual') ? 'QuickstartIndividual' : 'QuickstartInstitutional';
    },
  },
  methods: {
    onAccountToggleClicked(accountType) {
      this.accountType = accountType;
    },
  },
  data() {
    return {
      accountType: localStorage.getItem('accountType') || 'individual',
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
      <div class="page-header">
        <h2>Quickstart Guide</h2>
        <account-toggle @accountToggled="onAccountToggleClicked" />
      </div>
      <component :is="activeTab"></component>
    </template>
    <template #aside>
      <div class="download-header">
        <h2>Downloads</h2>
      </div>
      <download-card v-for="download in downloads" v-bind="download" />
    </template>
  </base-view>
</template>

<style>
.page-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

}

.QuickstartIndividualTab {
  padding: 0px;
  background-color: #344D78;
  color: white;
  opacity: 1;
  border-radius: 40px;
  height: 30px;
  width: 100px;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

.QuickstartInstitutionalTab {
  padding: 0px;
  background-color: #C4C4C4;
  opacity: 1;
  border-radius: 40px;
  height: 30px;
  width: 100px;
  color: grey;
  border: none;
  cursor: pointer;
}



.QuickstartInstitutionalTab:focus {
  background-color: #344D78;
  color: white;
  font-weight: bold;
}
</style>