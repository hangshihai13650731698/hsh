<template>
  <div>
    <Header color="green">微信</Header>
    <Search />
    <Panel />
    <Gallery />
    <Toast />
  </div>
</template>
<script>
import Header from "../components/header.vue";
import Search from "../components/search.vue";
import Panel from "../components/panel.vue";
import Gallery from "../components/gallery.vue";
import Toast from "../components/toast.vue";
export default {
  methods: {},
  components: {
    Header,
    Search,
    Panel,
    Gallery,
    Toast
  }
};
</script>