<script>
import Sidenav from '@/components/Sidenav.vue'
export default {
  components: {
    Sidenav
  }
}
</script>

<template>
  <sidenav />
  <main>
    <router-view />
  </main>
</template>


<style>
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
}

main {
  padding-left: 250px;
}
</style>
