<template>
  <div class="container">
    <div class="row">
      <div class="col-m-12">
        <div class="card">
          <div class="card-title">{{itemTitle}}</div>
          <div class="card-body">{{itemContent}}</div>
        </div>
        <!-- 
        <div>{{price}}</div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { itemTitle: String, itemContent: String, price: Number },
  data() {
    return {};
  },
};
</script>
<style scoped>
.card {
  border: 1px solid #ebebeb;
  padding: 20px;
  text-align: justify;
  color:#ebebeb
}
</style>