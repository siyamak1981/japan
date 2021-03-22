<template>
  <div class="row">
    <div v-if="!loading">
      <div class="col-m-8">
        <div class="card">
          <div class="card-header">{{bookable.title}}</div>
          <div class="card-body">{{bookable.description}}</div>
        </div>
        <review-list :bookable-id="params" />
      </div>
      <Availability :bookable-id="params" @availability="checkPrice($event)" />
      <transition>
        <div class="col-4 col-bascket">
          <span>Basket:</span>
          <router-link :to="{name:'basket'}">
            <span v-if="itemsInBasket" class="fas fa-shopping-cart"></span>
            <sup>{{itemsInBasket}}</sup>
          </router-link>
        </div>
      </transition>
      <transition>
        <div class="col-4">
          <price-breakdown v-if="price" :price="price"></price-breakdown>
        </div>
      </transition>
      <transition>
        <div class="col-4">
          <button
            class="btn btn-outline-secondary"
            v-if="price"
            @click.prevent="addToBasket"
            :disabled="inBasketAlready"
          >Book now</button>
        </div>
      </transition>
      <transition>
        <div class="col-4">
          <button
            class="btn btn-outline-secondary"
            v-if="inBasketAlready"
            @click.prevent="removeFromBasket"
          >Remove</button>
        </div>``
      </transition>
      <div class="col-4" v-if="inBasketAlready">
        <span>
          It is Seem you added this object to the basket already,if you want to change it,
          You can change it
        </span>
      </div>
    </div>
    <div v-else>this loading ...</div>
  </div>
</template>


<script>
import { mapState, mapGetters } from "vuex";
import Availability from "../bookable/components/Availability.vue";
import ReviewList from "../bookable/components/ReviewList.vue";
import PriceBreakdown from "../bookable/components/PriceBreakdown.vue";
export default {
  data() {
    return {
      bookable: null,
      loading: false,
      params: this.$route.params.id,
      price: null,
    };
  },
  components: {
    Availability,
    ReviewList,
    PriceBreakdown,
  },
  created() {
    this.loading = true;
    axios
      .get(`/api/bookables/${this.$route.params.id}`)
      .then((response) => {
        this.bookable = response.data.data;
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    ...mapState({
      lastSearch: "lastSearch",
    }),
    inBasketAlready() {
      if (null === this.bookable) {
        return false;
      }
      return this.$store.getters.inBasketAlready(this.bookable.id);
    },
    ...mapGetters({
      itemsInBasket: "itemsInBasket",
    }),
  },
  methods: {
    async checkPrice(event) {
      if (!event) {
        this.price = null;
        return;
      }
      try {
        this.price = (
          await axios.get(
            `/api/bookables/${this.bookable.id}/price?from=${this.lastSearch.from}&to=${this.lastSearch.to}`
          )
        ).data.data;
      } catch (error) {
        this.price = null;
      }
    },

    addToBasket() {
      this.$store.dispatch("addToBasket", {
        price: this.price,
        bookable: this.bookable,
        dates: this.lastSearch,
      });
    },

    removeFromBasket() {
      this.$store.dispatch("removeFromBasket", this.bookable.id);
    },
  },
};
</script>

<style  scoped>
div .row {
  margin-left: 100px;
  margin-right: 100px;
}

.card {
  border: 1px solid #ffffff26;
  width: 100%;
  height: auto;
  overflow: auto;
  padding: 10px;
}
.card-header {
  border-bottom: 1px solid #ffffff26;
  width: 100%;
  padding-bottom: 20px;
  text-align: center;
  color: #eee;
}
.card-body {
  color: #eee;
  padding: 40px 10px;
}
.btn-outline-secondary {
  border: 1px solid#eee;
  background-color: transparent;
  padding: 7px;
  margin: 10px;
  border-radius: 5px;
  color: #eee;
  width: 100%;
  cursor: pointer;
  font-weight: bolder;
}
.btn-outline-secondary:hover {
  background-color: #35495e;
  color: #ebebbe;
}
.fa-shopping-cart {
  color: yellow;
  font-size: 1.1em;
}
.col-bascket {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.col-bascket sup {
  color: yellow;
  font-size: 1.1em;
}
@media only screen and (max-width: 680px) {
  div .row {
    margin: 50px 10px 0 72px;
  }
}
</style>