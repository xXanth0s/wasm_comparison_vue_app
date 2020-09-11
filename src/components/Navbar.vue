<template>
    <nav class="navbar navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Home</router-link>
        <router-link class="navbar-brand" to="/todo">ToDo</router-link>
        <router-link class="navbar-brand" to="/videolist">Video</router-link>
        <router-link class="navbar-brand" to="/table">Tabelle</router-link>
        <router-link class="navbar-brand"
                     :to="{path: '/sortstring', query: { count:100000, autoStart: false, runCount: 0}}">Quicksort With Strings
        </router-link>
        <router-link class="navbar-brand"
                     :to="{path: '/sortnumbers', query: { count:100000, autoStart: false, runCount: 0}}">Quicksort
            With Numbers
        </router-link>
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
