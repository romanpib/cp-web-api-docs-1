<script>
import BaseViewSidenav from "./BaseViewSidenav.vue";
import workflows from "@/docs/workflows";
export default {
  components: {
    BaseViewSidenav
  },
  data() {
    return {
      workflows: workflows
    };
  }
}
</script>

<template>
  <base-view-sidenav>
    <template #content>
      <h2>Endpoint Explorer</h2>
      <p>Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper. Maecenas id fermentum sem. Etiam egestas lorem ac elit iaculis dignissim.</p>
    </template>
    <template #aside>
    </template>
  </base-view-sidenav>
</template>