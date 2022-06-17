<script>
import { changelog } from '@/docs/changelog';
import BaseView from '@/views/BaseView.vue';
import ChangelogSection from '@/components/changelog/ChangelogSection.vue';
import ChangelogFiltersList from '@/components/changelog/ChangelogFiltersList.vue';
import Warning from '@/components/Warning.vue';
export default {
  components:
  {
    BaseView,
    ChangelogSection,
    ChangelogFiltersList,
    Warning
  },
  methods: {
    toggleFilter(filters) {
      this.activeFilters = filters;
    }
  },
  computed: {
    filteredChangelog() {
      return this.changelog.filter(change => {
        return this.activeFilters.every(tag => change.tags.includes(tag));
      });
    },
    uniqueChangelogTags() {
      return this.changelog.reduce((tags, change) => {
        change.tags.forEach(tag => {
          tags.includes(tag) ? null : tags.push(tag)
        });
        return tags;
      }, []);
    }
  },
  data() {
    return {
      changelog: changelog,
      activeFilters: []
    };
  },
}
</script>

<template>
  <base-view>
    <template #content>
      <h2>Changelog</h2>
      <warning v-if="filteredChangelog.length === 0" >
        <span>There are no changes available that meet the selected criteria. Remove some filters to see results.</span>
      </warning>
      <changelog-section v-for="(change, index) in filteredChangelog" v-bind="change" :key="index" />
    </template>
    <template #aside>
      <h2>Filter changes</h2>
      <changelog-filters-list :filters="uniqueChangelogTags" @filterClick="toggleFilter" />
    </template>
  </base-view>
</template>

<style>
.changelog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

div.changelog-tags>* {
  cursor: pointer;
  user-select: none;
}
</style>