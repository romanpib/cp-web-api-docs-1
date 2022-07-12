<script>
import { useAccountTypeStore } from '@/stores/accountTypeStore.js';
import BaseView from "@/views/base-views/BaseView.vue";
import AccountToggle from "@/components/AccountToggle.vue";
import EndpointsList from '@/components/endpoints/EndpointsList.vue';
import DownloadCard from '../components/DownloadCard.vue';
import Warning from '../components/Warning.vue';
export default {
  components: {
    BaseView,
    AccountToggle,
    EndpointsList,
    DownloadCard,
    Warning
},
  setup() {
    return {
      store: useAccountTypeStore(),
    };
  }
}
</script>

<template>
  <base-view>
    <template #content>
      <div class="content-header">
        <h2>Endpoints Explorer</h2>
        <account-toggle />
      </div>
      <warning>
        <p>
          This page is intended to be used on a desktop or laptop.
        </p>
      </warning>
      <p>
        On this page you will find all of the available endpoints along with their descriptions. Please note, the Client Portal
        API does not allow any banking or account operation operations. For this, please see the Digital Account Management (DAM) API.
      </p>
      <endpoints-list :accountType="this.store.accountType" />
    </template>
    <template #aside>
      <h2>Resources</h2>
      <download-card :title="'Download swagger.json'" :url="'https://interactivebrokers.github.io/cpwebapi/swagger.json'" :content="'Download the swagger.json file'"/>
      <download-card :title="'Doc style endpoints'" :url="'https://www.interactivebrokers.com/api/doc.html'" :content="'DOC style endpoints'"/>
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

.warning {
  display: none;
}

@media (max-width: 700px) {
  .warning {
    display: flex;
  }
}

</style>