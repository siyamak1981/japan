<template>
  <div class="row review-rating">
    <success v-if="success">You have left a review, thank you very much!</success>
    <fatal-error v-if="error" />
    <div v-if="!success && !error">
      <div :class="[{'col-4' :towColumns }, {'d-none':oneColumn}]">
        <div v-if="loading">Loading...</div>
        <div v-if="hasBooking">
          <div class="card">
            <div class="card-body">
              <p>
                Stayed at :
                <router-link
                  :to="{ name:'bookable', params:{id:booking.bookable.bookable_id}}"
                >{{booking.bookable.title}}</router-link>
              </p>
              <p>From {{booking.from}} To {{ booking.to }}</p>
            </div>
          </div>
        </div>
      </div>
      <div :class="[{'col-8' :towColumns }, {'col-12': oneColumn }]">
        <div v-if="loading">Loading..</div>
        <div v-else>
          <div v-if="alreadyReviewed">
            <h3>You have already left a review for booking!</h3>
          </div>
          <div v-else>
            <div class="col-12">
              <label for="text-muted">Select the Star Rating(1 is worse 5 is best)</label>
              <star-rating class="star" v-model="review.rating"></star-rating>
            </div>
            <div class="col-12">
              <label for="Message">Descript your experience with:</label>
              <textarea
                name="content"
                v-model="review.content"
                id="form-control"
                cols="30"
                rows="10"
                :class="[{'is_invalid':errorFor('content')}]"
              ></textarea>
              <v-errors :errors="errorFor('content')"></v-errors>
            </div>
            <button class="btn btn-block" @click.prevent="submit" :disabled="sending">Submit!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { is404, is422 } from "./../shared/utils/response";
import validationErrors from "./../shared/mixins/validationErrors";
export default {
  mixins: [validationErrors],
  data() {
    return {
      review: {
        id: null,
        rating: 5,
        content: null,
      },
      existingReview: null,
      loading: false,
      booking: null,
      error: false,
      sending: false,
      success: false,
    };
  },
  async created() {
    this.review.id = this.$route.params.id;
    this.loading = true;
    try {
      this.existingReview = (
        await axios.get(`/api/reviews/${this.review.id}`)
      ).data.data;
    } catch (error) {
      if (is404(error)) {
        try {
          this.booking = (
            await axios.get(`/api/booking-by-review/${this.review.id}`)
          ).data.data;
        } catch (error) {
          this.error = !is404(error);
        }
      } else {
        this.error = true;
      }
    }
    this.loading = false;
    // axios
    //   .get(`/api/reviews/${this.review.id}`)
    //   .then((response) => {
    //     this.existingReview = response.data.data;
    //   })
    //   .catch((error) => {
    //     if (is404(error)) {
    //       return axios
    //         .get(`/api/booking-by-review/${this.review.id}`)
    //         .then((response) => {
    //           this.booking = response.data.data;
    //         })
    //         .catch((error) => {
    //           this.error = !is404(error);
    //         });
    //     }
    //     this.error = true;
    //   })
    //   .then((response) => {
    //     setTimeout(() => {
    //       this.loading = false;
    //     }, 1000);
    //   });
  },
  computed: {
    alreadyReviewed() {
      return this.hasReview || !this.hasBooking;
    },
    hasReview() {
      return this.existingReview !== null;
    },
    hasBooking() {
      return this.booking !== null;
    },
    oneColumn() {
      return !this.loading && this.alreadyReviewed;
    },
    towColumns() {
      return this.loading || !this.alreadyReviewed;
    },
  },
  methods: {
    submit() {
      this.error = null;
      this.sending = true;
      this.success = false;

      axios
        .post("/api/reviews", this.review)
        .then((response) => {
          this.success = 201 === response.status;
        })
        .catch((error) => {
          if (is422(error)) {
            const errors = error.response.data.errors;
            if (errors["content"]) {
              this.errors = errors;
              return;
            }
          }
          this.error = true;
        })
        .then(() => {
          this.sending = false;
        });
    },
  },
};
</script>
<style scoped>
.card {
  margin-top: 10px;
  width: 100%;
  border: 1px solid #eee;
  padding: 20px;
}
a {
  color: #42b983;
}
p {
  margin-bottom: 20px;
}
.review-rating {
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 100px 0 0 100px;
}
.star {
  margin: 20px 0 20px 0;
}
#form-control {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.btn-block {
  background: #42b983;
  padding: 7px;
  margin: 15px;
  border-radius: 5px;
  color: #111;
  width: 35%;
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
  text-transform: capitalize;
  font-size: 1.2rem;
}
.d-none {
  display: none !important;
}

@media only screen and (max-width: 680px) {
  .review-rating {
    margin: 100px 0 0 100px;
  }
}
</style>