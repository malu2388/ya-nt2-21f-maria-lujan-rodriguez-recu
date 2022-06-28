<template>
  <div id="app">
    <Funcion />
  </div>
</template>

<script>
import Funcion from "./components/Funcion.vue";

export default {
  name: "App",
  components: {
    Funcion,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
