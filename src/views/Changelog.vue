<script>
import { useChangelogStore } from '@/stores/changelogStore';
import BaseView from '@/views/base-views/BaseView.vue';
import ChangelogSection from '@/components/changelog/ChangelogSection.vue';
import ChangelogFiltersList from '@/components/changelog/ChangelogFiltersList.vue';
import Warning from '@/components/Warning.vue';
export default {
  setup: () => ({store: useChangelogStore()}),
  components:
  {
    BaseView,
    ChangelogSection,
    ChangelogFiltersList,
    Warning
  }
}
</script>

<template>
  <base-view :reverseWrap="true">
    <template #content>
      <h2>Changelog</h2>
      <p>
        This page is intended to showcase updates for both Client Portal API and it's Documentation page.
      </p>
      <warning v-if="store.filteredChangelog.length == 0" >
        <span>There are no changes available that meet the selected criteria. Remove some filters to see results.</span>
      </warning>
      <changelog-section v-for="(change, index) in store.filteredChangelog" v-bind="change" :key="index" />
    </template>
    <template #aside>
      <changelog-filters-list />
    </template>
  </base-view>
</template>

<style>
.changelog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

div.changelog-tags > * {
  cursor: pointer;
  user-select: none;
}
</style>