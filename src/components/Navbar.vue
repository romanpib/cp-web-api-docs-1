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
  background-color: #F5F5F5;
  width: 100%;
}

nav>div {
  padding-inline: 1.5rem;
}

nav a {
  text-decoration: none;
}

.branding {
  margin: 0;
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

.links>* {
  color: white;
}

nav a:not(:first-child) {
  display: none;
}

@media only screen and (min-width: 700px) {
  nav {
    height: 100vh;
    width: 250px;
  }

  nav a:not(:first-child) {
    display: block;
  }

  .links {
    background-color: #F5F5F5;
    flex-direction: column;
    padding-top: 0;
    padding-inline: 0;
  }

  .links a {
    width: 100%;
    color: black;
    padding-block: 1rem;
    padding-left: 1.5rem;
  }

  .links a:hover {
    color: #DB1222;
  }

  .links a.router-link-exact-active {
    background-color: #DB1222;
    color: white;
  }

  .links i {
    display: none;
  }

  .branding {
    padding-left: 1.5rem;
  }
}
</style>