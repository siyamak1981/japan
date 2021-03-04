<template>
  <div class="container" :class="{'show':showSidebar}">
    <div class="control">
      <i class="fas fa-angle-double-right" @click="showNav"></i>
    </div>
    <div class="navigation-icons">
      <i class="fas fa-home"></i>
      <i class="fas fa-camera-retro"></i>
      <i class="fas fa-user-circle"></i>
      <i class="fas fa-comment-dots"></i>
    </div>
    <div class="navigation-link">
      <transition-group name="fade" appear>
        <div v-show="showLink" :class="{textDecoration:isActive}" key="1">
          <router-link :to="{name:'home'}">Home</router-link>
        </div>
        <div v-show="showLink" key="3">
          <router-link :to="{name:'bookables'}">Bookable</router-link>
        </div>
        <div v-show="showLink" key="4">Contact</div>
        <div v-show="showLink" key="5">FAQ</div>
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
    };
  },
  methods: {
    showNav() {
      if (this.showSidebar) {
        this.showLink = false;
        setTimeout(() => {
          this.showSidebar = false;
          document.getElementById("app").style.paddingLeft = "50px";
          document.getElementById("navigation").style.left = "72px";
        }, 500);
      } else {
        this.showSidebar = true;
        document.getElementById("app").style.paddingLeft = "150px";

        setTimeout(() => {
          this.showLink = true;
          document.getElementById("app").style.paddingLeft = "150px";
          document.getElementById("navigation").style.left = "220px";
        }, 500);
      }
    },
  },
};
</script>
<style scoped>
.container {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 70px;
  padding: 10px;
  z-index: 9999;
  transition: all 0.5s ease-in-out;
  min-height: calc(100vh);
  overflow: hidden;
  background: #000;
  border-left: 1px solid #610116;
  border-bottom: 1px solid #610116;
  border-top: 1px solid #610116;
}
.control {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.control i {
  font-size: 20px;
  color: #fa1e4e;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
.navigation-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  float: left;
  flex-direction: column;
}
.navigation-icons i {
  font-size: 1rem;
  color: #fa1e4e;
  cursor: pointer;
  padding: 20px 0;
  transition: all 0.5s ease-in-out;
}
.navigation-icons i:hover {
  color: #ebebeb;
}
.show {
  width: 220px;
}
.show .navigation-icons > i {
  display: flex;
  color: #ebebeb;
}
.show .navigation-icons > i:hover {
  display: flex;
  color: #fa1e4e;
}
.show .control > i {
  color: #ebebeb;
  transform: rotateZ(-180deg);
}
.navigation-link {
  padding-top: 20px;
  float: left;
}
.navigation-link div {
  margin-bottom: 37px;
  cursor: pointer;
  color: #ebebeb;
}
.navigation-link div:hover {
  color: #fa1e4e;
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
.router-link-exact-active {
  background: #fa1e4e;
  border-radius: 5px;
  color: #ebebeb;
  font-variant: italic;
  text-decoration: none;
}
div .router-link-active {
  background: #fa1e4e;
  color: #ebebeb;
  border-radius: 3px;
  padding: 15px;
  font-variant: italic;
  text-decoration: none;
}
div a {
  color: #ebebeb;
  text-decoration: none;
}
div a:hover {
  color: #fa1e4e;
}
</style> 