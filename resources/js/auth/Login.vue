
<template>
  <div class="row">
    <div class="col-4 form-group">
      <label for="from">Email:</label>
      <input
        type="text"
        name="from"
        v-model="email"
        :class="[{'is_invalid':this.errorFor('email')}]"
        placeholder="Start date.."
      />
      <v-errors :errors="errorFor('email')"></v-errors>

      <label for="from">Password:</label>
      <input
        type="text"
        name="to"
        v-model="password"
        :class="[{'is_invalid':this.errorFor('password')}]"
        placeholder="password .."
      />
      <v-errors :errors="errorFor('password')"></v-errors>

      <button class="btn btn-block" @click="handleSubmit" :disabled="loading">
        <span v-if="!loading">Check!</span>
        <span v-if="loading">
          <i class="fas fa-circle-notch fa-spin"></i> Login...
        </span>
      </button>
    </div>
  </div>
</template>

   <script>
import { is422 } from "./../shared/utils/response";
import validationErrors from "./../shared/mixins/validationErrors";
export default {
  mixins: [validationErrors],
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      status: null,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      if (this.password.length > 0) {
        this.loading = true;
        this.errors = null;
        axios
          .post("api/login", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            localStorage.setItem("user", response.data.success.name);
            localStorage.setItem("jwt", response.data.success.token);

            if (localStorage.getItem("jwt") != null) {
              this.$router.go("/board");
            }
          })
          .catch(function (error) {
            if (is422(error)) {
              this.errors = error.response.data.errors;
            }
            this.status = error.response.status;
          });
        this.loading = false;
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("jwt")) {
      return next("board");
    }

    next();
  },
};
</script>


<style scoped>

.form-group {
     color: #ebebeb;
    margin:100px 0 100px 450px;
}
input[type="text"] {
  width: 100%;
  padding: 7px 7px;
  margin: 8px;
  border-radius: 5px;
  border: none;
  color: #111;
}
input[type="text"]:focus,
input[type="email"]:focus {
  background-color: transparent;
  border: 1px solid #eee;
  color: #eee;
}

.btn-block {
  background: #42b983;
  padding: 7px;
  margin:30px 8px ;
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
  border: 3px solid #fa1e4e !important;
}
.invalid-feedback {
  color: #fa1e4e !important;
}
.text-danger {
  color: #fa1e4e;
}
.text-success {
  color: #42b983;
}
</style>