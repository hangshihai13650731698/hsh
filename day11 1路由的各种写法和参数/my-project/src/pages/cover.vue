<template>
  <div>
    <Search />
    <van-swipe class="lunbo" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="list1">
        <img
          style="width:100%"
          src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1199854374,2902149365&fm=202&mola=new&crop=v1"
          alt
        />
      </van-swipe-item>
      <van-swipe-item class="list2">
        <img
          style="width:100%"
          src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1386833453,2703259007&fm=26&gp=0.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item class="list3">
        <img
          style="width:100%"
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3356844394,2271561381&fm=26&gp=0.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item class="list4">
        <img
          style="width:100%"
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=331044100,2561097742&fm=26&gp=0.jpg"
          alt
        />
      </van-swipe-item>
    </van-swipe>
    <Card />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Search from "../components/Search.vue";
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
export default {
    data(){
        return{

        }
    },
     components: {
    Search,
    Card
  }
};
</script>

<style>
.lunbo {
  width: 100%;
  height: 200px;
}
.list1 {
  background: red;
}
.list2 {
  background: pink;
}
.list3 {
  background: blue;
}
.list4 {
  background: #cccccc;
}
</style>