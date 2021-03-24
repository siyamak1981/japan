<template>
  <div class="container-basket">
    <div class="col-8">
      <div class="row">
        <div class="col-6">
          <label for="First">First name</label>
          <input type="text" name="firs_tname" id v-model="customer.first_name" />
        </div>
        <div class="col-6">
          <label for="First">Last name</label>
          <input type="text" name="last_name" id v-model="customer.last_name" />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <label for="Email">Email</label>
          <input type="email" name="email" id v-model="customer.email" />
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <label for="Street">Street</label>
          <input type="text" name="street" v-model="customer.street" />
        </div>
        <div class="col-6">
          <label for="City">City</label>
          <input type="text" name="city" v-model="customer.city" />
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <label for="State">State</label>
          <input type="text" name="state" v-model="customer.state" />
        </div>
        <div class="col-4">
          <label for="City">Country</label>
          <input type="text" name="country" v-model="customer.country" />
        </div>
        <div class="col-4">
          <label for="Zip">Zip</label>
          <input type="text" name="zip" v-model="customer.zip" />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <button class="btn btn-block" @click.prevent="book">click</button>
        </div>
      </div>
    </div>

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
</template>
<script>
import { mapGetters, mapState } from "vuex";
import { mixins } from "../shared/mixins/validationErrors";
export default {
  mixins: ["validationErrors"],
  data() {
    return {
      loading: false,
      customer: {
        first_name: null,
        last_name: null,
        email: null,
        state: null,
        city: null,
        street: null,
        country: null,
        zip: null,
      },
    };
  },
  computed: {
    ...mapGetters(["itemsInBasket"]),
    ...mapState({
      basket: (state) => state.basket.items,
    }),
  },
  methods: {
    async book() {
      this.loading = true;
      try {
        await axios.post("/checkout", {
          customer: this.customer,
          bookings: this.basket.map((basketItem) => ({
            bookable_id: basketItem.bookable.id,
            from: basketItem.dates.from,
            to: basketItem.dates.to,
          })),
        });
      } catch (error) {}
      this.loading = false;
    },
  },
};
</script>
<style scoped>
.container-basket {
  margin: 50px 35px 50px 70px;
}
.flex-span-basket {
  margin-top: 15px;
  float: right;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.flex-span-basket-pull {
  display: flex;
  float: right;
  border-top: 1px solid #ffffff26;
  justify-content: space-between;
}
.flex-justify-content-basket {
  display: flex;
  float: right;
  justify-content: space-between;
}
.flex-justify-content-basket-fa-trash {
  display: flex;
  float: right;
  justify-content: flex-end;
  color: yellow;
  cursor: pointer;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 5px 5px;
  margin: 8px 0;
  border-radius: 5px;
  border: 1px solid #eee;
  background: transparent;
  color: #eee;
}
input[type="text"]:focus,
input[type="email"]:focus {
  background-color: #eee;
  color: #111;
}

.btn-block {
  background: #42b983;
  padding: 7px;
  border-radius: 5px;
  color: #111;
  width: 100%;
  display: block;
  cursor: pointer;
  font-weight: bolder;
  border: none;
}
.btn-block:hover {
  background-color: #35495e;
  color: #ebebbe;
}
label {
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: bolder;
}
</style>