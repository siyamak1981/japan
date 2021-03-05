<template>
  <div>
    <navigation></navigation>
    <!-- <content></content> -->
    <sidebar></sidebar>
    <div class="distance-sidbar">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from "../SideBar.vue";
import Navigation from "../Navigation.vue";
// import Content from "../Content.vue";

export default {
  components: {
    sidebar: SideBar,
    navigation: Navigation,
    // content:Content
  },
};
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?73c27e26f610eb3c9f3feb0c75b03925";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
</script>
<style>
* {
  box-sizing: border-box;
}
.row:after {
  content: "";
  clear: both;
  display: block;
}
[class*="col-"] {
  float: left;
  padding: 15px;
}
/* For mobile phones: */
[class*="col-"] {
  width: 100%;
}

@media only screen and (min-width: 480px) {
  /* For tablets: */
  .col-m-1 {
    width: 8.33%;
  }
  .col-m-2 {
    width: 16.66%;
  }
  .col-m-3 {
    width: 25%;
  }
  .col-m-4 {
    width: 33.33%;
  }
  .col-m-5 {
    width: 41.66%;
  }
  .col-m-6 {
    width: 50%;
  }
  .col-m-7 {
    width: 58.33%;
  }
  .col-m-8 {
    width: 66.66%;
  }
  .col-m-9 {
    width: 75%;
  }
  .col-m-10 {
    width: 83.33%;
  }
  .col-m-11 {
    width: 91.66%;
  }
  .col-m-12 {
    width: 100%;
  }
  .distance-sidbar {
    margin-left: 50px;
    margin-top: 50px;
  }
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {
    width: 8.33%;
  }
  .col-2 {
    width: 16.66%;
  }
  .col-3 {
    width: 25%;
  }
  .col-4 {
    width: 33.33%;
  }
  .col-5 {
    width: 41.66%;
  }
  .col-6 {
    width: 50%;
  }
  .col-7 {
    width: 58.33%;
  }
  .col-8 {
    width: 66.66%;
  }
  .col-9 {
    width: 75%;
  }
  .col-10 {
    width: 83.33%;
  }
  .col-11 {
    width: 91.66%;
  }
  .col-12 {
    width: 100%;
  }
  .distance-sidbar {
    margin-left: 50px;
    margin-top: 50px;
  }
}
</style>

