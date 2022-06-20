<script>
import { useAccountTypeStore } from '@/stores/accountTypeStore.js';
import BaseViewNoAside from "@/views/BaseViewNoAside.vue";
import AccountToggle from "@/components/AccountToggle.vue";
import EndpointsIndividual from "@/components/endpoints/EndpointsIndividual.vue"
import EndpointsInstitutional from "@/components/endpoints/EndpointsInstitutional.vue"
export default {
  components: {
    BaseViewNoAside,
    AccountToggle,
    EndpointsIndividual,
    EndpointsInstitutional
  },
  computed: {
    activeTab() {
      const store = useAccountTypeStore()
      return (store.accountType == 'individual') ? EndpointsIndividual : EndpointsInstitutional
    }
  }
}
</script>

<template>
  <base-view-no-aside>
    <template #content>
      <div class="page_header">
        <h2>Endpoints Explorer</h2>
        <account-toggle />
      </div>
      <p>
        Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper. Maecenas id
        fermentum sem. Etiam egestas lorem ac elit iaculis dignissim. Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper. Maecenas id
        fermentum sem. Etiam egestas lorem ac elit iaculis dignissim. Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper. Maecenas id
        fermentum sem. Etiam egestas lorem ac elit iaculis dignissim. Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper. Maecenas id
        fermentum sem. Etiam egestas lorem ac elit iaculis dignissim. 
 
      </p>
      <component :is="activeTab" />
    </template>
  </base-view-no-aside>
</template>

<style>
.page_header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>