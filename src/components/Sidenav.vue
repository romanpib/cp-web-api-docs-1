<template>
  <nav>
    <div id="brand">
      <img src="@/assets/ib-logo-text-black.svg" alt="ibkr-logo">
      <h6>Client Portal API Documentation</h6>
    </div>
    <router-link to="/">Home</router-link>
    <router-link to="/quickstart">Quickstart</router-link>
    <router-link to="/authentication">Authentication</router-link>
    <router-link to="/endpoints">Endpoint Explorer</router-link>
    <router-link to="/websockets">Websockets</router-link>
    <router-link to="/workflows">Workflows</router-link>
    <router-link to="/changelog">Changelog</router-link>
    <router-link to="/support">Support</router-link>
  </nav>
</template>

<style>
nav {
  display: flex;
  flex-direction: column;
  background-color: rgba(196, 196, 196, 0.25);
  text-align: left;
  width: 300px;
  height: 100vh;
  position: fixed;
  overflow: hidden;
}

nav a {
  padding-block: 0.75rem;
  padding-left: 1.5rem;
  text-decoration: none;
  color: black;
}

nav a:hover {
  color: #db1222;
}

nav a.router-link-exact-active {
  background-color: #db1222;
  color: white;
}

h6 {
  font-weight: bold;
  margin: 0;
  background-color: unset;
}

#brand {
  width: 75%;
  padding-left: 1.5rem;
  padding-block: 1rem;
}
</style>