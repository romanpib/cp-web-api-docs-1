<script>
import { useAccountTypeStore } from '@/stores/accountTypeStore.js';
import { workflowsIndividual, workflowsInstitutional } from "@/docs/workflows";
import BaseViewSidenav from "@/views/base-views/BaseViewSidenav.vue";
import ScrollableSidenav from "@/components/ScrollableSidenav.vue";
import AccountToggle from '@/components/AccountToggle.vue'

export default {
  components: {
    BaseViewSidenav,
    ScrollableSidenav,
    AccountToggle
  },
  created() {
    document.addEventListener('scroll', this.onScroll);
  },
  destroyed() {
    document.removeEventListener('scroll', this.onScroll);
  },
  mounted() {
    // On mounted is called after the component's DOM is rendered, hence the get here
    let elements = Array.prototype.slice.call(document.getElementsByTagName('h4'));
    this.elementToIdMap = elements.reduce((result, ele) => {
      let top = ele.getBoundingClientRect().top;
      result[top] = ele.id;
      return result
    }, {})
  },
  data() {
    return {
      activeSectionID: null,
      elementToIdMap: null 
    }
  },
  methods: {
    onScroll() {
      let scrollPosition = window.scrollY;
      let keys = Object.keys(this.elementToIdMap);
      for (var i = 0; i < keys.length; i++) {
        if (keys[i  ] > scrollPosition) {
          this.activeSectionID = this.elementToIdMap[keys[i]];
          break;
        }
      }
    }
  },
  computed: {
    sections() {
      return this.activeTab.map(section => {
        return {
          category: section.category,
          titles: section.items.map(item => {
            return {
              id: item.id,
              title: item.title
            }
          })
        };
      });
    },
    activeTab() {
      const store = useAccountTypeStore();
      return (store.accountType == 'individual') ? workflowsIndividual : workflowsInstitutional;
    },
    activeSection() {
      return this.activeSectionID || this.sections[0].titles[0].id;
    }
  }
}
</script>

<template>
  <base-view-sidenav>
    <template #content>
      <div class="content-header">
        <h2>Workflows</h2>
        <account-toggle />
      </div>
      <template v-for="section in activeTab">
        <h3>{{ section.category }}</h3>
        <template v-for="article in section.items">
          <h4 :id="`${article.id}`">{{ article.title }}</h4>
          <component :innerHTML="article.content" />
        </template>
      </template>
    </template>
    <template #aside>
      <scrollable-sidenav :sections="this.sections" :activeSection="this.activeSection" />
    </template>
  </base-view-sidenav>
</template>

<style>
.content-header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

div.code {
  width: 100%;
  background-color: black;
  padding: 1rem 1.5rem;
}

code {
  color: white;
}
</style>