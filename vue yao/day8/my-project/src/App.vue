<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "kkkk"
    };
  },
  name: "app",
  components: {}
};
</script>

<style>
</style>
