<template>
  <van-list
    :offset="50"
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-card
      v-for="(r,index) in restaurantsComputed"
      :key="index"
      num="2"
      price="2.00"
      desc="描述信息"
      :title="r.name"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      @click="navToDetal(index)"
    >
      <div slot="tags">
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </div>
      <div slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </div>
    </van-card>
  </van-list>
</template>
<script>
import Vue from "vue";
import { Card, Tag, Button, List } from "vant";
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
Vue.use(List);
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      restaurants: []
    };
  },
  computed: {
    search() {
      return this.$store.getters.getAuthor;
    },
    restaurantsComputed() {
      if (this.search.value) {
        return this.restaurants.filter(item => {
          window.console.log(item);
          if (item.name.indexOf(this.search.value) >= 0) {
            return item;
          }
        });
      } else {
        return this.restaurants;
      }
    }
  },
  created() {
    this.$parent.$data.test = "abc";
    window.console.log(this);
  },
  methods: {
    onLoad() {
      this.$axios.get("http://localhost:3000/restaurants").then(({ data }) => {
        this.restaurants = this.restaurants.concat(data);
        // this.restaurants = [...this.restaurants, ...data];
        window.console.log(data);

        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.restaurants.length >= 10) {
          this.finished = true;
        }
      });
      window.console.log("到底部了");
    },
    // 跳转详情页
    navToDetal(index) {
      // /detail/123?plan=private
      this.$router.push({
        name: "detail",
        params: { id: index }
        // query: { plan: "private" }
      });
      // window.location.href
      window.console.log(index);
    }
  }
};
</script>