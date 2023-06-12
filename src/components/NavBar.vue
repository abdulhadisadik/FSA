<template>
  <div>
    <nav class="navbar bg-warning">
      <div class="container-fluid">
        <span class="navbar-brand h1">{{ title }}</span>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  props: {
    title: {
      type: String,
      default: "Javanese Translater",
    },
  },
};
</script>
