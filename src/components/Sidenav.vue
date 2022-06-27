<template>
  <nav>
    <div id="brand">
      <a href="./">
        <img src="@/assets/ib-logo-text-black.svg" alt="ibkr-logo">
        <h6>Client Portal API Documentation</h6>
      </a>
    </div>
    <router-link to="/">Home</router-link>
    <router-link to="/quickstart">Quickstart</router-link>
    <router-link to="/authentication">Authentication</router-link>
    <router-link to="/endpoints">Endpoints Explorer</router-link>
    <router-link to="/websockets">Websockets</router-link>
    <router-link to="/workflows">Workflows</router-link>
    <router-link to="/changelog">Changelog</router-link>
    <router-link to="/support">Support</router-link>
  </nav>
</template>

<style>
nav {
  user-select: none;
  /* Prevent text selection */
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  text-align: left;
  width: 250px;
  flex: 1;
  height: 100vh;
  position: fixed;
  overflow: hidden;
}

nav a {
  padding-block: 0.75rem;
  padding-left: 1.5rem;
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
  align-items: baseline;
  cursor: pointer;
}

nav a:hover {
  color: #db1222;
}

nav a.router-link-exact-active {
  background-color: #db1222;
  color: white;
}

h6 {
  margin: 0;
}

#brand {
  padding-left: 1.5rem;
}

#brand img {
  width: 75%;
}

#brand a {
  padding-left: 0;
  padding-block: 1.25rem;
  display: flex;
  flex-direction: column;
}
</style>