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
        <div class="col-4">
           <price-breakdown v-if="price" :price="price"></price-breakdown>
        </div>
      </transition>
      <transition>
        <div class="col-4">
          <button class="btn btn-outline-secondary" v-if="price">Book now</button>
        </div>
      </transition>
    </div>
    <div v-else>this loading ...</div>
  </div>
</template>


<script>
import { mapState } from "vuex";
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
    PriceBreakdown
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
  border: 1px solid#35495e;
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
@media only screen and (max-width: 680px) {
  div .row {
    margin: 50px 10px 0 72px;
  }
  
}
</style>