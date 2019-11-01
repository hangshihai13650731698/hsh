<template>
  <div>
    <Search />
    <Grid />
    <Divider />
    <Card />
  </div>
</template>
<script>
import Search from "../components/Search.vue";
import Grid from "../components/Grid.vue";
import Divider from "../components/Divider.vue";
import Card from "../components/Card.vue";
export default {
  components: {
    Search,
    Grid,
    Divider,
    Card
  }
};
</script>