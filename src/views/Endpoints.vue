<script>
import BaseView from "@/views/BaseView.vue";
export default {
  components: {
    BaseView
  }
}
</script>

<template>
  <base-view>
    <template #content>
      <div class="page_header">
        <h2>Endpoint Explorer</h2>
        <account-toggle />
      </div>
      <p>Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper. Maecenas id fermentum sem. Etiam egestas lorem ac elit iaculis dignissim.</p>
    </template>
    <template #aside>
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