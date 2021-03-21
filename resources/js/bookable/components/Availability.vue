<template>
  <div class="col-4 form-group">
    <span>Check Availability</span>
    <transition>
      <span v-if="noAvailability" class="text-danger">(NOT AVALABLE)</span>
      <span v-if="hasAvailability" class="text-success">(AVAILABLE)</span>
    </transition>
    <br />
    <br />
    <label for="from">From:</label>
    <input
      type="text"
      name="from"
      v-model="from"
      :class="[{'is_invalid':this.errorFor('from')}]"
      placeholder="Start date.."
    />
    <v-errors :errors="errorFor('from')"></v-errors>

    <label for="from">To:</label>
    <input
      type="text"
      name="to"
      v-model="to"
      :class="[{'is_invalid':this.errorFor('to')}]"
      placeholder="end date.."
    />
    <v-errors :errors="errorFor('to')"></v-errors>

    <button class="btn btn-block" @click.prevent="check" :disabled="loading">
      <span v-if="!loading">Check!</span>
      <span v-if="loading">
        <i class="fas fa-circle-notch fa-spin"></i> Check...
      </span>
    </button>
    
  </div>
</template>
<script>
import { is422 } from "./../../shared/utils/response";
import validationErrors from "./../../shared/mixins/validationErrors";
export default {
  mixins: [validationErrors],
  props: {
    bookableId: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      from: this.$store.state.lastSearch.from,
      to: this.$store.state.lastSearch.to,
      loading: false,
      status: null,
    };
  },
  methods: {
    async check() {
      this.loading = true;
      this.errors = null;
      this.$store.dispatch("setLastSearch", {
        from: this.from,
        to: this.to,
      });
      try {
        this.status = (
          await axios.get(
            `/api/bookables/${this.bookableId}/availability?from=${this.from}&to=${this.to}`
          )
        ).status;
        this.$emit("availability", this.hasAvailability)
      } catch (error) {
        if (is422(error)) {
          this.errors = error.response.data.errors;
        }
        this.status = error.response.status;
           this.$emit("availability", this.hasAvailability)
      }
      this.loading = false;
    },
  },
  computed: {
    hasErrors() {
      return 422 == this.status && this.errors != null;
    },
    hasAvailability() {
      return 200 == this.status;
    },
    noAvailability() {
      return 404 == this.status;
    },
  },
};
</script>


<style scoped>
.form-group {
  color: #ebebeb;
}
input[type="text"] {
  display: flex;
  padding: 7px 7px;
  margin: 8px;
  border-radius: 5px;
  width: 100%;
  display: block;
}

.btn-block {
  background: #42b983;
  padding: 7px;
  margin: 10px;
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
.is_invalid {
  border: 3px solid #fa1e4e;
}
.invalid-feedback {
  color: #fa1e4e;
}
.text-danger {
  color: #fa1e4e;
}
.text-success {
  color: #42b983;
}
</style>