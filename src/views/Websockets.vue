<script>
import BaseViewSidenav from "./BaseViewSidenav.vue";
import ScrollableSidenav from "@/components/ScrollableSidenav.vue";
import websockets from "@/docs/websockets";
export default {
  components: {
    BaseViewSidenav,
    ScrollableSidenav
  },
  computed: {
    sections() {
      // Calcualte the sections and pass them to the ScrollableSidenav component
      return websockets.map(section => {
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
    }
  },
  data() {
    return {
      websockets: websockets
    };
  }
}
</script>

<template>
  <base-view-sidenav>
    <template #content>
      <h2>Websockets</h2>
      <template v-for="section in websockets">
        <h3>{{ section.category }}</h3>
        <template v-for="article in section.items">
          <h4 :id="`${article.id}`">{{ article.title }}</h4>
          <p>{{ article.content }}</p>
        </template>
      </template>
    </template>
    <template #aside>
      <scrollable-sidenav :sections="sections" />
    </template>
  </base-view-sidenav>
</template>