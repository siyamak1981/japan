<template>
  <div class="row">
  
 
      <transition>
    <div class="feedback" v-if="hasAvailability">
        <span v-if="noAvailability" class="text-danger">(NOT AVALABLE)</span>
        <span v-if="hasAvailability" class="text-success"><small>(Send Your Request)</small></span>
</div>
      </transition>
    <div class="col-4 form-group">
      <label for="from">Name:</label>
      <input
        type="text"
        v-model="newUser.name"
        name="name"
        :class="[{'is_invalid':this.errorFor('name')}]"
        placeholder="name.."
      />
      <v-errors :errors="errorFor('name')"></v-errors>
      <label for="from">Email:</label>
      <input
        type="email"
        name="email"
        v-model="newUser.email"
        :class="[{'is_invalid':this.errorFor('email')}]"
        placeholder="email.."
      />
      <v-errors :errors="errorFor('email')"></v-errors>

      <label for="from">Password:</label>
      <input
        type="password"
        name="password"
        v-model="newUser.password"
        :class="[{'is_invalid':this.errorFor('password')}]"
        placeholder="password .."
      />
      <v-errors :errors="errorFor('password')"></v-errors>
      <label for="from">Repeat Password:</label>
      <input
        type="password"
        name="password_confirmation"
        v-model="newUser.password_confirmation"
        :class="[{'is_invalid':this.errorFor('password')}]"
        placeholder="password .."
      />
      <v-errors :errors="errorFor('password')"></v-errors>

      <button class="btn btn-block" @click="handleSubmit" :disabled="loading">
        <span v-if="!loading">Register!</span>
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
      newUser: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      loading: false,
      status: null,
    };
  },
  methods: {
    async handleSubmit(e) {
      this.errors = null;
      this.loading = true;
      e.preventDefault();

      try {
        this.status = (await axios.post("/api/register", this.newUser)).status;
        // .then((response) => {
        //   this.status = response.status;
        // }
        // )
      } catch (error) {
        if (is422) {
          this.errors = error.response.data.errors;
        }
        this.status = error.response.status;
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
.feedback{
  margin:30px 500px;
  background: #35495e;
  width:300px;
  height: 50px;
  text-align: center;
  padding:20px;

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


</style>