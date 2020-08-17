<template>
    <div class="hello">
        <h2>
            Analyse der Vor- und Nachteile von WebAssembly und traditionellem JavaScript bei der Entwicklung von Single
            Page Applications
        </h2>
        <h4>
            Vue.js Application
        </h4>
        <p>
            Mittels dieser Anwendung kann verglichen werden, ob WebAssembly ein adaquater Ersatz für traditionelle JavaScript Applikationen ist.
            Hierfür wurden mehrere Funktionalitäten implementiert, welche ausgewertet werden.
        </p>
        <h3>To-Do App</h3>
        <p>Um die Kommunikation mit einer API wurde eine To-Do App implementiert</p>

        <router-link class="navbar-brand" to="/quicksort">Zur To-Do App</router-link>
        <h3>Video</h3>
        <p>
            Um zu prüfen ob visueller Content gleich gut angezeigt werden kann, wurde eine Video Mediathek implementiert
        </p>
        <router-link class="navbar-brand" to="/quicksort">Zur Mediathek</router-link>
        <h3>Tabelle</h3>
        <p>
            Für einen Vergleich der Render Geschwindigkeit, wurde eine Tabelle mit 10.000 Einträgen implementiert
        </p>
        <router-link class="navbar-brand" to="/quicksort">Zur Tabelle</router-link>
        <h3>Quick-Sort</h3>
        <p>
            Um einen Geschwindigkeitsvergleich von WebAssembly und JavaScript zu prüfen, wird der Algorithmus Quicksort auf ein Array mit 10.000 Einträgen angewendet
        </p>
        <router-link class="navbar-brand" to="/quicksort">Zu Quicksort</router-link>
    </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
