<template>
  <div class="container-navigation" id="navigation">
    <div class="row navbar">
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
          this.$router.push("/landing");
        })
        .catch((error) => {
          localStorage.removeItem("access_token");
        });
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
</style>