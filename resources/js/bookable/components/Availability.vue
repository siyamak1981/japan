<template>
  <div class="col-4 form-group">
    <span>Check Availability</span>
    <span v-if="noAvailability" class="text-danger">(NOT AVALABLE)</span>
    <span v-if="hasAvailability" class="text-success">(AVAILABLE)</span>
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
    <div
      class="invalid-feedback"
      v-for="(error, index) in this.errorFor('from')"
      :key="`from` + index"
    >{{ error }}</div>
    <label for="from">To:</label>
    <input
      type="text"
      name="to"
      v-model="to"
      :class="[{'is_invalid':this.errorFor('to')}]"
      placeholder="end date.."
    />
    <div
      class="invalid-feedback"
      v-for="(error, index) in this.errorFor('to')"
      :key="`to` + index"
    >{{ error }}</div>
    <button class="btn btn-block" @click.prevent="check" :disabled="loading">Check!</button>
  </div>
</template>
<script>
export default {
  props: {
    bookableId: {
      type: [String, Number],

      required: true,
    },
  },
  data() {
    return {
      from: null,
      to: null,
      loading: false,
      errors: null,
      status: null,
    };
  },
  methods: {
    check() {
      this.loading = true;
      this.errors = null;
      axios
        .get(
          `/api/bookables/${this.bookableId}/availability?from=${this.from}&to=${this.to}`
        )
        .then((response) => {
          this.status = response.status;
        })
        .catch((error) => {
          if (422 == error.response.status) {
            this.errors = error.response.data.errors;
          }
          this.status = error.response.status;
        })
        .then(() => {
          this.loading = false;
        });
    },
    errorFor(field) {
      return this.hasErrors && this.errors[field] ? this.errors[field] : null;
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