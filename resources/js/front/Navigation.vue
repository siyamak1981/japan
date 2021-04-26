<template>
  <div class="container-navigation" id="navigation">
    <div class="row navbar">
      <transition>
        <div class="feedback" v-if="hasAvailability" @click="closeFeedback" v-show="windowClose">
          <span class="text-success" v-if="hasAvailability">
            <small>(You logout Successfully!)</small>
            <i class="fa fa-window-close" aria-hidden="true"></i>
          </span>
        </div>
      </transition>
      <div class="col-12">
        <ul>
          <router-link :to="{ name: 'login' }" class="nav-link" v-if="!isLoggedIn">
            <i class="fas fa-sign-in-alt">
              <span>Login</span>
            </i>
          </router-link>
          <router-link :to="{ name: 'register' }" class="nav-link" v-if="!isLoggedIn">
            <i class="fas fa-user-plus">
              <span>Register</span>
            </i>
          </router-link>
          <li class="nav-link" v-if="isLoggedIn">
            <i class="fas fa-user"></i>
            Hi {{name}}
          </li>
          <div class="nav-link" @click.prevent="logout" v-if="isLoggedIn">
            <i class="fa fa-sign-out-alt"></i>
            Logout
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: null,
      name: null,
      status: null,
      windowClose: true,
      showNav:false
    };
  },
  methods: {
    logout() {
      const token = localStorage.getItem("access_token");
      axios
        .get("/api/logout", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          localStorage.removeItem("access_token");
          this.status = response.status;
          setTimeout(() => {
            this.$router.push("/login");
          }, 4000);
        })
        .catch((error) => {
          localStorage.removeItem("access_token");
        });
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
  mounted() {
    this.isLoggedIn = localStorage.getItem("access_token");
    this.name = localStorage.getItem("user");
  },
};
</script>
<style scoped>
#navigation {
  background: #111;
  border-bottom: 1px solid #ffffff26;
  height: 60px;
  overflow: hidden;
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
}
.navbar {
  float: right;
  margin-right: 120px;
}
.navbar ul a {
  display: flex;
  align-items: center;
  align-content: space-between;
  justify-content: space-between;
}

.navbar i {
  position: relative;
  color: #42b983;
}
.navbar ul .nav-link {
  margin-left: 20px;
  float: left;
  list-style-type: none;
  cursor: pointer;
}
.feedback {
  float: right;
  margin: 5px 30px 5px 0px;
  background: #35495e;
  width: 200px;
  padding: 15px;
  overflow: hidden;
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