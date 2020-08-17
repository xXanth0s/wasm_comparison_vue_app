<template>
    <nav class="navbar navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Home</router-link>
        <router-link class="navbar-brand" to="/todo">ToDo</router-link>
        <router-link class="navbar-brand" to="/video">Video</router-link>
        <router-link class="navbar-brand" to="/table">Tabelle</router-link>
        <router-link class="navbar-brand" to="/quicksort">Quicksort</router-link>
    </nav>
</template>

<script>
  export default {
    name: 'Navbar',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .navbar {
        justify-content: center;
    }
</style>
