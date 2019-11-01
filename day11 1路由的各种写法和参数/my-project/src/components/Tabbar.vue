<template>
  <van-tabbar v-model="active">
    <van-tabbar-item @click="goto('/main/home')" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item @click="goto('/main/cover')" icon="search">发现</van-tabbar-item>
    <van-tabbar-item @click="goto('/main/my')" icon="friends-o">我的</van-tabbar-item>
    <van-tabbar-item @click="goto('/main/shezhi')" icon="setting-o">设置</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: 0
    };
  },

  methods: {
    //传路由的方法
    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>