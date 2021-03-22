<template>
  <div>
    <h6>price breakdown:</h6>
    <div class="col-pricing" v-for="(days, price) in price.breakdown" :key="price">
      <span>{{days}} * ${{price}}</span>
      <span>${{days * price}}</span>
    </div>
    <div class="col-pricing">
      <span>Total</span>
      <span>${{price.total }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    price: Object,
  },
};
</script>
<style scoped>
h6 {
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: bolder;
}
.col-pricing {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid #ffffff26;
}
</style>