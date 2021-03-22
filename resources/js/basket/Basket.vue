<template>
  <div class="container-basket">
    <div class="row">
      <div class="col-8">Checkout Form</div>
      <div class="col-4 flex-span-basket">
        <span>Your Cart</span>
        <span v-if="itemsInBasket" class="badg badge-basket">Item:{{itemsInBasket}}</span>
        <span v-else>Empty</span>
      </div>
     <transition-group name="fade">
          <div v-for="item in basket" :key="item.bookable.id">
        <div class="col-4 flex-span-basket-pull">
          <span>
            <router-link
              :to="{name:'bookable', params:{id:item.bookable.id}}"
            >{{item.bookable.title}}</router-link>
          </span>
          <span>${{item.price.total}}</span>
        </div>
        <div class="col-4 flex-justify-content-basket">
          <span>From:{{item.dates.from}}</span>
          <span>To:{{item.dates.to}}</span>
        </div>
        <div
          class="col-4 flex-justify-content-basket-fa-trash"
          @click="$store.dispatch(`removeFromBasket`, item.bookable.id)"
        >
          <span class="fas fa-trash-alt"></span>
        </div>
      </div>
     </transition-group>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters(["itemsInBasket"]),
    ...mapState({
      basket: (state) => state.basket.items,
    }),
  },
};
</script>
<style scoped>
.container-basket {
  margin: 100px;
}
.flex-span-basket {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.flex-span-basket-pull {
  display: flex;
  float: right;
  clear: both;
  border-top: 1px solid #ffffff26;
  justify-content: space-between;
}
.flex-justify-content-basket {
  display: flex;
  float: right;
  clear: both;
  justify-content: space-between;
}
.flex-justify-content-basket-fa-trash {
  display: flex;
  float: right;
  clear: both;
  justify-content: flex-end;
  color: yellow;
}
.badge-basket {
  background: yellow;
  border-radius: 50px;
  padding: 5px;
  font-size: 1.2em;
  color: #111;
}
.container-basket a {
  color: #42b983;
}
.fade-enter-active, .fade-leave-active{
    transition:opacity 3s;
}
.fade-enter, .fade-leave-to {
    opacity:0;
}

</style>