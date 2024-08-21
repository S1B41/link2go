<script>
import Shortner from "./components/shortner.vue"
export default {
  name: "App",
  components: {
    Shortner,
  },
}
</script>

<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Link2Go</a>
    </nav>
    <div class="container">
      <shortner />
    </div>
  </div>
</template>
