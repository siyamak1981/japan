
<template>
  <div class="row">
    <transition>
      <div class="feedback" v-if="hasAvailability" @click="closeFeedback" v-show="windowClose">
        <span class="text-success" v-if="hasAvailability">
          <small>(You Logged In Successfully!)</small>
          <i class="fa fa-window-close" aria-hidden="true"></i>
        </span>
      </div>
    </transition>
    <div class="col-4 form-group">
      <label for="from">Email:</label>
      <input
        type="text"
        name="from"
        v-model="user.email"
        :class="[{'is_invalid':this.errorFor('email')}]"
        placeholder="Start date.."
      />
      <v-errors :errors="errorFor('email')"></v-errors>

      <label for="from">Password:</label>
      <input
        type="text"
        name="to"
        v-model="user.password"
        :class="[{'is_invalid':this.errorFor('password')}]"
        placeholder="password .."
      />
      <v-errors :errors="errorFor('password')"></v-errors>
      <div>
        Do not You Have a Acoount?
        <small>
          <router-link :to="{name:'register'}">Register</router-link>
        </small>
      </div>
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
      user: {
        email: "",
        password: "",
      },
      loading: false,
      status: null,
      windowClose: true,
    };
  },
  methods: {
    async handleSubmit(e) {
      this.errors = null;
      this.loading = true;
      e.preventDefault();

      try {
        this.status = (await axios.post("/api/login", this.user)).status;
        
 localStorage.setItem('token', response.data)
 console.log(response.data)
        setTimeout(() => {
          this.$router.push("/board");
        }, 4000);
      } catch (error) {
        if (is422) {
          this.errors = error.response.data.errors;
        }
        this.status = error.response.status;
      }
      this.loading = false;
    },
    closeFeedback() {
      this.windowClose = false;
    },
    // handleSubmit(){
    //   axios.post('/api/login', this.user)
    //   .then(response =>{
    //     console.log(response)
    //   })
    // }
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
.feedback {
  float: right;
  margin: 30px 30px 0 0px;
  background: #35495e;
  width: 300px;
  padding: 20px;
}
small a {
  color: yellow;
}
.form-group {
  color: #ebebeb;
  margin: 100px 0 100px 450px;
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
}
.fa-window-close {
  float: right;
}
</style>