<template>
  <div id="app" class="main-app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <sidebar></sidebar>
    <router-view/>
  </div>
</template>

<script>

import Sidebar from "./components/Sidebar.vue";

export default {
  components: {
    Sidebar
  }  
}
</script>

<style lang="scss">

.main-app {
  display: grid;
  grid-template-columns: 26rem 1fr;
  height: 100vh;
}

* {
    margin: 0;
    padding: 0;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%; // 1rem = 10px, 10px/16px = 62.5% (16px browser default value)
}

body {
    // font-family: 'Open Sans', sans-serif;
    // font-weight: 400;
    // line-height: 1.6;
}

// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
