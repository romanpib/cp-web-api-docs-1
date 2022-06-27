<script>
export default {
  methods: {
    toggleEndpointsDropdown() {
      const dropdown = this.$el.querySelector('#endpoints-dropdown')
      const dropdownIndicator = this.$el.querySelector('i')
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
    },
    onEndpointsClicked() {
      this.dropdownIsActive != this.dropdownIsActive
    }
  },
  data() {
    return {
      dropdownIsActive: false
    }
  }
}
</script>

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
    <a @click="toggleEndpointsDropdown" :class="(this.dropdownIsActive) ? 'router-link-exact-active' : null" >Endpoints Explorer <i class="fa-solid fa-chevron-right"></i></a>
    <div id='endpoints-dropdown'>
      <router-link to="/endpoints" @click="onEndpointsClicked" >Available Endpoints</router-link>
      <a href="https://interactivebrokers.github.io/cpwebapi/swagger.json" target="_blank">Swagger</a>
      <a href="https://www.interactivebrokers.com/api/doc.html" target="_blank">DOC Style</a>
    </div>
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

#endpoints-dropdown {
  display: none;
  font-size: small;
}

#endpoints-dropdown a {
  padding-left: 3rem;
}
</style>