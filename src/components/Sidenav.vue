<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/quickstart">Quickstart</router-link> |
    <router-link to="/authentication">Authentication</router-link> |
    <router-link to="/endpoints">Endpoint Explorer</router-link> |
    <router-link to="/websockets">Websockets</router-link> |
    <router-link to="/workflows">Workflows</router-link> |
    <router-link to="/changelog">Changelog</router-link> |
    <router-link to="/support">Support</router-link>
  </nav>
</template>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>