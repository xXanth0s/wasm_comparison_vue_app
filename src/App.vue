<template>
    <div id="app">
        <navbar></navbar>
        <div class="container mt-5">
            <router-view/>
        </div>
    </div>
</template>


<script>
  // @ is an alias to /src


  import Navbar from "./components/Navbar.vue";

  export default {
    name: 'Home',
    components: {
      Navbar
    }
  }
</script>


<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
