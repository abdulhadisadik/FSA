<template>
  <div>
    <nav-bar title="Jawa ke Indonesia" />
    <translater-jawa class="mt-5" />
  </div>
</template>

<script>
import TranslaterJawa from "./components/TranslaterJawa.vue";
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    TranslaterJawa,
    NavBar,
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
}
</style>
