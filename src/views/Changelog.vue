<script>
import BaseView from '@/views/BaseView.vue';
import ChangelogSection from '@/components/changelog/ChangelogSection.vue';
import ChangelogFilter from '@/components/changelog/ChangelogFilter.vue';
import Warning from '@/components/Warning.vue';
export default {
  components:
  {
    BaseView,
    ChangelogSection,
    ChangelogFilter,
    Warning
  },
  methods: {
    filter(tag) {
      this.activeFilters.includes(tag)
        ? this.activeFilters = this.activeFilters.filter(filter => filter !== tag)
        : this.activeFilters.push(tag)
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
      changelog: [
        {
          updateDate: '2019-01-01',
          tags: ["market-data", "orders", "authentication", "accounts"],
          content: 'This is the first changelog entry.'
        },
        {
          updateDate: '2019-01-02',
          tags: ["orders", "authentication"],
          content: 'This is the second changelog entry.'
        },
        {
          updateDate: '2019-01-03',
          tags: ["accounts", "authentication", "portfolio"],
          content: 'This is the third changelog entry.'
        },
        {
          updateDate: '2019-01-04',
          tags: ["positions", "documentation"],
          content: 'This is the fourth changelog entry.'
        }
      ],
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
      <div class="changelog-tags">
        <changelog-filter v-for="(tag, index) in uniqueChangelogTags" :tag="tag" :key="index" @toggleActive="filter(tag)" />
      </div>
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