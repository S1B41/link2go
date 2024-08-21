<script>
import Home from "./components/home.vue"
export default {
  name: "App",
  components: {
    Home,
  },
}
</script>

<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Link2Go</a>
    </nav>
    <div class="container">
      <home />
    </div>
  </div>
</template>
