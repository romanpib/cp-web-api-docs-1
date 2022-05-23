<template>
  <nav>
    <div id="brand">
      <a href="/">
        <img src="@/assets/ib-logo-text-black.svg" alt="ibkr-logo">
        <h6>Client Portal API Documentation</h6>
      </a>
    </div>
    <router-link to="/">Home</router-link>
    <router-link to="/quickstart">Quickstart</router-link>
    <router-link to="/authentication">Authentication</router-link>
    <a @click="toggleDropdown">Endpoints Explorer <i id="dropdown-status-icon" class="fa-solid fa-chevron-right"></i></a>
    <div id='endpoints-dropdown'>
      <router-link to="/endpoints">Available Endpoints</router-link>
      <a href="https://interactivebrokers.github.io/cpwebapi/swagger.json" target="_blank">Swagger</a>
      <a href="https://www.interactivebrokers.com/api/doc.html" target="_blank">DOC Style</a>
    </div>
    <router-link to="/websockets">Websockets</router-link>
    <router-link to="/workflows">Workflows</router-link>
    <router-link to="/changelog">Changelog</router-link>
    <router-link to="/support">Support</router-link>
  </nav>
</template>

<script>
  export default {
    methods: {
      toggleDropdown() {
        const dropdown = document.getElementById('endpoints-dropdown')
        const dropdownIndicator = document.getElementById('dropdown-status-icon')
        if (dropdown.style.display === 'block') {
          dropdown.style.display = 'none'
          dropdownIndicator.classList.remove('fa-chevron-down')
          dropdownIndicator.classList.add('fa-chevron-right')
        } 
        else {
          dropdown.style.display = 'block'
          dropdownIndicator.classList.remove('fa-chevron-right')
          dropdownIndicator.classList.add('fa-chevron-down')
        }
      }
    }
  }
</script>

<style>
nav {
  user-select: none;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  text-align: left;
  width: 250px;
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
  align-items: center;
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
  font-weight: bold;
  margin: 0;
  background-color: unset;
}

#brand {
  width: 75%;
  padding-left: 1.5rem;
}

#brand a {
  padding-left: 0;
  padding-block: 1.25rem;
  display: flex;
  flex-direction: column;
}

#endpoints-dropdown {
  display: none;
  font-size: small;
}

#endpoints-dropdown a {
  padding-left: 3rem;
}
</style>