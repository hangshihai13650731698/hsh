<template>
  <div>
    详情页
    <span>{{$route.params.id}}</span>
    <button @click="goto('/main/home')">返回首页</button>
  </div>
</template>

<script>
// import Vue from "vue";
export default {
  data() {
    return {
      name: this.search
    };
  },
  methods: {
    //传路由的方法
    goto(path) {
      this.$router.push(path);
    }
  },
  // 生命周期的创建时期
  created() {
    // window.console.log(this.$route.params.id);
    // 注意取出来不及时用会报错
    let {id} = this.$route.params;
    window.console.log(id);
    // return this.$route.params.id
  },
  computed: {
    search() {
      //  window.console.log(this.$router.params)
      return this.$route.params.id;
    }
    //   window.console.log(search)
    // window.console,log(search)
    //   nazhi() {
    //     if (this.search) {
    //       window.console.log(this.search);
    //       return this.search
    //     }
    //
    //   }
    // if (this.search.params) {

    // }
  }
};
</script>

<style lang="scss" scoped>
</style>