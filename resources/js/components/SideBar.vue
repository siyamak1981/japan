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
        <div v-show="showLink" :class="{textDecoration:isActive}" key="1" ><router-link :to="{name:'home'}">Home</router-link></div>
        <div v-show="showLink" key="3"><router-link :to="{name:'bookables'}">Bookable</router-link></div>
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
 isActive:true,
    };
  },
  methods: {
    showNav() {
      if (this.showSidebar) {
        this.showLink = false;
        setTimeout(() => {
          this.showSidebar = false;
        }, 500);
      } else {
        this.showSidebar = true;

        setTimeout(() => {
          this.showLink = true;
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
  width: 80px;
  padding: 10px;
  border: 1px solid #eee;
  z-index: 9999;
  transition: all 0.5s ease-in-out;
  min-height: calc(100vh - 20px);
  background: rgb(27, 27, 27);
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
  color: orange;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
.navigation-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  float: left;
  flex-direction: column;
}
.navigation-icons i {
  font-size: 1rem;
  color: orange;
  cursor: pointer;
  padding: 20px 0;
  transition: all 0.5s ease-in-out;
}
.navigation-icons i:hover {
  color: palegoldenrod;
}
.show {
  width: 220px;
}
.show .navigation-icons > i {
  display: flex;
  color: #eee;
}
.show .navigation-icons > i:hover {
  display: flex;
  color: rgb(245, 8, 8);
}
.show .control > i {
  color: #eee;
  transform: rotateZ(-180deg);
}
.navigation-link {
  padding-top: 20px;
  float: left; 
}
.navigation-link div {
  margin-bottom: 37px;
  cursor: pointer;
  color: #eee;


}
.navigation-link div:hover {
  color: orange;
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
 .router-link-exact-active{
  background: yellow;
  border-radius: 5px;
  color: red;
  font-variant: italic;
  text-decoration: none;
}
 div .router-link-active{
  background: yellow;
  color: red;
  border-radius: 3px;
  padding:15px;
  font-variant: italic;
  text-decoration: none;
}
div a{
  color:#eee;
 text-decoration: none;

}
div a:hover{
  color: orange;

}
</style>