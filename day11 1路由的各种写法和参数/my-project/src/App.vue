<template>
  <div id="app">
    <!-- <Search />
    <Grid/>
    <Diver />
    <Card/> -->
    <!-- 保存组件，不用每次重新加载 -->
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <!-- <Tabbar /> -->
  </div>
</template>

<script>
// import Search from "./components/Search.vue";
// import Tabbar from "./components/Tabbar.vue";
// import Diver from "./components/Diver.vue";
// import Grid from "./components/Grid.vue";
// import Card from "./components/Card.vue";
export default {
  name: "app",
  components: {
    // Search,
    // Grid,
    // Diver,
    // Card,
    // Tabbar
  }
};
</script>

<style>
</style>
