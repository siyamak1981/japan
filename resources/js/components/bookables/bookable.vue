<template>
  <div>XXX</div>
</template>

<style  scoped>
div {
  margin: 200px;
  color: yellow;
}
</style>
<script>
export default {
  data() {
    return {
      bookable: null,
    };
  },
  created() {
    axios
      .get("bookables/${this.$route.params.id}")
      .then((response) => {
        this.bookable = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>