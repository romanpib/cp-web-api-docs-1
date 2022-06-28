<template>
  <nav>
    <div class="branding">
      <a href="./">
        <img src="@/assets/ib-logo-text-black.svg" alt="ibkr-logo">
        <h6>Client Portal API Documentation</h6>
      </a>
    </div>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/quickstart">Quickstart</router-link>
      <router-link to="/authentication">Authentication</router-link>
      <router-link to="/endpoints">Endpoints Explorer</router-link>
      <router-link to="/websockets">Websockets</router-link>
      <router-link to="/workflows">Workflows</router-link>
      <router-link to="/changelog">Changelog</router-link>
      <router-link to="/support">Support</router-link>
      <i class="fa-solid fa-chevron-down"></i>
    </div>
  </nav>
</template>

<style scoped>
nav {
  z-index: 99;
  position: sticky;
  display: flex;
  top: 0;
  flex-direction: column;
  user-select: none;
}

nav>div {
  padding-inline: 1rem;
}

nav a {
  text-decoration: none;
}

.branding {
  margin: 0;
  background-color: #F5F5F5;
  padding-block: 1rem;
}

.branding img {
  width: 10rem;
}

.branding h6 {
  margin: 0;
  width: fit-content;
}

.branding a {
  color: black;
}

.branding a:hover {
  color: #DB1222;
}

.links {
  background-color: #db1222;
  padding-block: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
}

.links > * {
  color: white;
}

nav a:not(:first-child) {
  display: none;
}

@media only screen and (min-width: 1100px) {}
</style>