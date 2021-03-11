<template>
  <div class="container-sidebar" :class="{'show':showSidebar}">
    <div class="control">
      <i class="fas fa-angle-double-right" @click="showNav"></i>
    </div>
    <div class="logo-img">
      <img
        :src="image"
        alt
      />
      <span>Siyamak</span>
    </div>
    <div class="navigation-icons">
      <i class="fas fa-home"></i>
      <i class="fas fa-camera-retro"></i>
    </div>

    <div class="navigation-link">
      <transition-group name="fade" appear>
        <div v-show="showLink" :class="{textDecoration:isActive}" key="1">
          <router-link :to="{name:'home'}">Home</router-link>
        </div>
        <div v-show="showLink" key="3">
          <router-link :to="{name:'bookables'}">Bookable</router-link>
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showSidebar: false,
      showLink: false,
      isActive: true,
      image:"/img/download.png"
    };
  },
  methods: {
    showNav() {
      if (this.showSidebar) {
        this.showLink = false;
        setTimeout(() => {
          this.showSidebar = false;
          document.getElementById("app").style.paddingLeft = "50px";
          document.getElementById("navigation").style.marginLeft = "28px";
        }, 500);
      } else {
        this.showSidebar = true;
        document.getElementById("app").style.paddingLeft = "150px";

        setTimeout(() => {
          this.showLink = true;
          document.getElementById("navigation").style.marginLeft = "68px";
          document.getElementById("app").style.paddingLeft = "150px";
        }, 500);
      }
    },
  },
};
</script>
<style scoped>
.container-sidebar {
  top: 0%;
  left: 0%;
  width: 80px;
  padding: 8px;
  z-index: 999;
  transition: all 0.5s ease-in-out;
  min-height: calc(100vh);
  overflow: hidden;
  position: fixed;
  background: #111;
  border-bottom: 1px solid #ffffff26;
  border-left: 1px solid #ffffff26;
  border-right: 1px solid #ffffff26;
}
.control {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ffffff26;
  margin-bottom: 13px;
  margin-top: 10px;
}
.control i {
  font-size: 20px;
  color: #42b983;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  margin-bottom: 20px;
  margin-left: 22px;
}
.logo-img {
  width: 100%;
  left: 10px;
  border-bottom: 1px solid #ffffff26;
  color: #eee;
  text-transform: capitalize;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}
.logo-img span {
  margin-left: 10px;
  font-size: 20px;
}
.logo-img img {
  width: 40px;
  margin: 10px;
}
.navigation-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  float: left;
  flex-direction: column;
  margin-top: 15px;
}
.navigation-icons i {
  font-size: 1rem;
  color: #42b983;
  cursor: pointer;
  padding: 20px 0;
  transition: all 0.5s ease-in-out;
}
.navigation-icons i:hover {
  color: #35495e;
}
.show {
  width: 220px;
}
.show .navigation-icons > i {
  display: flex;
  color: #35495e;
}
.show .navigation-icons > i:hover {
  display: flex;
  color: #42b983;
}
.show .control > i {
  color: #35495e;
  transform: rotateZ(-180deg);
}
.navigation-link {
  margin-top: 20px;
  width: 200px;
}

.navigation-link div {
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  
}
.navigation-link div:hover {
  /* background: #42b983; */

}

div .router-link-active {
  background: #35495e;
  color: #eee;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
}
div .router-link-active:hover {
  background: #42b983;
  color:#111;
  
}
div a {
  color: #eee;
  text-decoration: none;
}
div a:hover {
  color: #eee;

}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-leave,
.fade-enter-to {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 750ms ease-in-out;
}
</style> 