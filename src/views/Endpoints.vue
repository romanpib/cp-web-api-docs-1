<script>
import { useAccountTypeStore } from '@/stores/accountTypeStore.js';
import BaseViewNoAside from "@/views/base-views/BaseViewNoAside.vue";
import AccountToggle from "@/components/AccountToggle.vue";
import EndpointsList from '@/components/endpoints/EndpointsList.vue';
export default {
  components: {
    BaseViewNoAside,
    AccountToggle,
    EndpointsList
  },
  setup() {
    return {
      store: useAccountTypeStore(),
    };
  }
}
</script>

<template>
  <base-view-no-aside>
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
  </base-view-no-aside>
</template>

<style>
.content-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>