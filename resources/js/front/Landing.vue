<template>
  <div>
    <navigation-bar></navigation-bar>
    <div class="row"></div>
  </div>
</template>
<script>
import Navigation from "./Navigation.vue";

export default {
  components: {
    "navigationBar": Navigation,
  },
  data() {
    return {};
  },

  mounted() {
    let token = localStorage.getItem("access_token");
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
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