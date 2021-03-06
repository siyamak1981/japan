<template>
  <div class="card">
    <div class="cart-body">
      <div class="card-title">{{title}}</div>
      <div class="card-text">{{description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: { title: String, description: String, id: Number },
  data() {
    return {};
  },
};
</script>
<style scoped>
.card {
  border: 1px solid #fa1e4e;
  padding: 20px;
  margin-left: 25px;
  text-align: justify;
  color: #ebebeb;
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: center;
  align-content: stretch;
  height: 150px;
  overflow: auto;
}
</style>