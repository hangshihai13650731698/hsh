<template>
  <van-grid :column-num="5">
    <van-grid-item v-for="(g,index) in gridsComputed" :key="index" icon="photo-o" :text="g.name" />
  </van-grid>
</template>
<script>
import Vue from "vue";
import axios from "axios";
// import $ from "jquery";
import { Grid, GridItem } from "vant";
Vue.use(Grid).use(GridItem);
export default {
  data() {
    return {
      grids: []
    };
  },
  created() {
    // 获取数据
    this.loadMore();
  },
  methods: {
    // 请求后端的宫格数据
    loadMore() {
      axios.get("http://localhost:3000/entries").then(({ data }) => {
        window.console.log(data);
        this.grids = data;
      });
      // $.ajax({
      //   url: "http://localhost:3000/entries",
      //   type: "GET",
      //   success(data) {
      //     window.console.log(data);
      //   }
      // });
    }
  },
  computed: {
    // 14->10宫格
    gridsComputed() {
      return this.grids.slice(0, 10);
    }
  }
};
</script>