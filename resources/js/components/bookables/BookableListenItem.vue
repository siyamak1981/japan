<template>
 
        <div class="card">
          <div class="cart-body">
          <div class="card-title">{{itemTitle}}</div>
          <div class="card-text">{{itemDescription}}</div>
          </div>
        </div>

</template>

<script>
export default {
  props: { itemTitle: String, itemDescription: String, price: Number },
  data() {
    return {};
  },
};
</script>
<style scoped>
.card {
  border: 1px solid #ebebeb;
  padding: 20px;
  margin-left:10px;
  text-align: justify;
  color:#ebebeb;
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: center;
  align-content: stretch;
  height: 150px;
  overflow: auto;
}
</style>