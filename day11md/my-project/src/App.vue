<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Tabbar />
  </div>
</template>

<script>

import Tabbar from "./components/Tabbar.vue";

export default {
  data(){
    return {
      test: 'kkkk'
    }
  },
  name: "app",
  components: {
    Tabbar
  }
};
</script>

<style>
</style>
