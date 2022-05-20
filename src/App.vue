<script setup>
  import Sidenav from './components/Sidenav.vue'
</script>

<template>
  <Sidenav />
  <main>
    <!-- This is where the views are injected -->
    <router-view />
  </main>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  display: flex;
  flex-direction: row;
}

/* 300px is the width of the sidenav */
/* flex 1 fills in the remaining width */
main {
  flex: 1;
  margin-left: 300px;
  padding-inline: 50px;
}
</style>
