<template>
  <van-list
    :offset="50"
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-card
      v-for="(r,index) in  restaurantsComputed"
      :key="index"
      num="99"
      tag="标签"
      price="88"
      :desc="r.description"
      :title="r.name"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      origin-price="10.00"
      
      @click="xiangqing(index)"
    >
      <div slot="footer">
        <van-button class="btn1" size="mini">加入购物车</van-button>
        <van-button class="btn2" size="mini">立即购买</van-button>
      </div>
    </van-card>
  </van-list>
</template>

<script>
// 引入使用
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
  //   计算属性并且赛选
  computed: {
    search() {
      return this.$store.getters.getText;
    },
    // 上面取值出来this.search.value取出来有的话就执行下面查询
    restaurantsComputed() {
      if (this.search.value) {
        //   过滤赛选
        window.console.log(this.search.value)
        return this.restaurants.filter(item => {
                                // 根据这些取到的值查找原对象有则返回无则原来
          if (item.name.indexOf(this.search.value) >= 0) {
            return item;
          }
        });
      } else {
        return this.restaurants;
      }
    }
  },
  created() {},
  methods: {
    onLoad() {
      this.$axios.get("http://localhost:3000/restaurants").then(({ data }) => {
        this.restaurants = this.restaurants.concat(data);
        //    加载时的状态结束
        this.loading = false;
        if (this.restaurants.length >= 10) {
          this.finished = true;
        }
      });
    },
    // 跳转到详情页
    xiangqing(index){
      window.console.log(index)
      this.$router.push(
        {
          name:'page',params: {id: index }
        }
      )
    }
  }
};
</script>
<style>
.btn1 {
  background: red;
  color: white;
}
.btn2 {
  background: #58bc58;
  color: white;
}
</style>