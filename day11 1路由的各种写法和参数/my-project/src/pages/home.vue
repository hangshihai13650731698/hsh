<template>
  <div>
      <!-- <dizhi/> -->
    <Search />
    <Grid />
    <Diver />
    <Card />
  </div>
</template>

<script>
import Search from "../components/Search.vue";
// import dizhi from "../components/dizhi.vue";
import Diver from "../components/Diver.vue";
import Grid from "../components/Grid.vue";
import Card from "../components/Card.vue";
export default {
  //  props: {
  //   columnsPlaceholder: String
  // },
  components: {
    // dizhi,
    Search,
    Grid,
    Diver,
    Card
  }
};
</script>

