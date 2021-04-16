<template>
  <div>
    <navigation-bar></navigation-bar>
    <div class="row">
  
    </div>
  </div>
</template>
<script>
import Navigation from "./Navigation.vue";

export default {
  components: {
    "navigation-bar": Navigation,
  
  },
  data() {
    return {

    };
  },


};
</script>
<style scoped>
.row {
  display: flex;
  justify-items: center;
  justify-content: center;
  align-content: center;
  margin: 100px;
}

</style>