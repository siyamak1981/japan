<template>
  <div class="card">
    <div class="cart-body">
      <router-link :to="{ name:'bookable', params:{id} }">
        <div class="card-title" :class="{'text-underline':isActive}">{{title}}</div>
      </router-link>
      <div class="card-text">{{description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: { title: String, description: String, id: Number },
  data() {
    return {
      isActive:true
    };
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
.card-title{
  margin-bottom:10px;
  color:rgb(16, 190, 147);
 
}

</style>