<script>
import { useAccountTypeStore } from '@/stores/accountTypeStore.js';
import BaseView from "@/views/base-views/BaseView.vue";
import AccountToggle from "@/components/AccountToggle.vue";
import EndpointsList from '@/components/endpoints/EndpointsList.vue';
import DownloadCard from '../components/DownloadCard.vue';
export default {
  components: {
    BaseView,
    AccountToggle,
    EndpointsList,
    DownloadCard
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
      <p>
        Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper. Maecenas id
        fermentum sem. Etiam egestas lorem ac elit iaculis dignissim. Quisque ultrices leo quam, sed eleifend mauris
        bibendum in. Donec molestie vehicula ullamcorper. Maecenas id
        fermentum sem. Etiam egestas lorem ac elit iaculis dignissim. Quisque ultrices leo quam, sed eleifend mauris
        bibendum in. Donec molestie vehicula ullamcorper. Maecenas id
        fermentum sem. Etiam egestas lorem ac elit iaculis dignissim. Quisque ultrices leo quam, sed eleifend mauris
        bibendum in. Donec molestie vehicula ullamcorper. Maecenas id
        fermentum sem. Etiam egestas lorem ac elit iaculis dignissim.

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

<style>
.content-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>