<template>
  <div class="container-sidebar" :class="{'show':showSidebar}">
    <div class="control">
      <i class="fas fa-angle-double-right" @click="showNav"></i>
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
  background: #000;
  border-bottom: 1px solid #610116;
  border-left: 1px solid #610116;
  border-right: 1px solid #610116;
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
  color: #610116;
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
  margin-top: 20px;
  width: 200px;
}
.navigation-link div {
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  align-content: stretch;
}
.navigation-link div:hover {
  color: #f7ced7;
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

div .router-link-active {
  background: #610116;
  color: #ebebeb;
  padding-left: 50px;
  padding-top: 11px;
  padding-bottom: 10px;
  margin-top: 5px;
  margin-right: 5px;
  width: 100%;
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