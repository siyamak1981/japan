<template>
  <div class="row">
    <transition>
      <div class="feedback" v-if="hasAvailability" @click="closeFeedback" v-show="windowClose">
        <span class="text-success" v-if="hasAvailability">
          <small>(Password Is Changed Successfully!)</small>
          <i class="fa fa-window-close" aria-hidden="true"></i>
        </span>
      </div>
    </transition>
    <div class="col-4 form-group">
      <label for="from">Email:</label>
      <input
        type="email"
        name="email"
        v-model="email"
        :class="[{'is_invalid':this.errorFor('email')}]"
        placeholder="email.."
      />
      <v-errors :errors="errorFor('email')"></v-errors>

      <label for="from">New Password:</label>
      <input
        type="password"
        name="password"
        v-model="password"
        :class="[{'is_invalid':this.errorFor('password')}]"
        placeholder="password .."
      />
      <v-errors :errors="errorFor('password')"></v-errors>
      <label for="from">Repeat Password:</label>
      <input
        type="password"
        name="password_confirmation"
        v-model="password_confirmation"
        :class="[{'is_invalid':this.errorFor('password_confirmation')}]"
        placeholder="password .."
      />
      <v-errors :errors="errorFor('password_confirmation')"></v-errors>
      <button class="btn btn-block" @click="resetPassword" :disabled="loading">
        <span v-if="!loading">Password Change!</span>
        <span v-if="loading">
          <i class="fas fa-circle-notch fa-spin"></i> Loading...
        </span>
      </button>
    </div>
  </div>
</template>

   <script>
import { is422 } from "../shared/utils/response";
import validationErrors from "./../shared/mixins/validationErrors";
export default {
  name: "Register",
  mixins: [validationErrors],
  data() {
    return {
      token: null,
      email: null,
      password: null,
      password_confirmation: null,
      loading: false,
      status: null,
      windowClose: true,
    };
  },

  methods: {
    resetPassword(e) {
      this.errors = null;
      this.loading = true;
      e.preventDefault();

      axios
        .post("/api/reset-password", {
          token: this.$route.query.token,

          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        })
        .then((response) => {
          this.status = response.status;
           setTimeout(() => {
             this.$router.push("/login");
           
            }, 4000);
        })

        .catch((error) => {
          if (is422) {
            this.errors = error.response.data.errors;
          }
          this.status = error.response.status;
        });
      this.loading = false;
    },
    closeFeedback() {
      this.windowClose = false;
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
small a {
  color: yellow;
}
.feedback {
  float: right;
  margin: 30px 30px 0 0px;
  background: #35495e;
  width: 300px;
  padding: 20px;
}
.form-group {
  color: #ebebeb;
  margin: 100px 0 100px 450px;
}
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 7px 7px;
  margin: 8px;
  border-radius: 5px;
  border: none;
  color: #111;
}
input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus {
  background-color: transparent;
  border: 1px solid #eee;
  color: #eee;
}

.btn-block {
  background: #42b983;
  padding: 7px;
  margin: 30px 8px;
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
  font-weight: bold;
}
.fa-window-close {
  float: right;
}
</style>