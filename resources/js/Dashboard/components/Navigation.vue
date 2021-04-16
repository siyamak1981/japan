<template>
  <div class="container-navigation" id="navigation">
    <div class="row navbar">
      <div class="col-12">
        <input type="search" name="search" id="search" placeholder=" Search ..." />
        <i class="fas fa-search"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {};
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
  padding:0;
  margin:0;
  top: 0;
  left:0;
  right:0;
  width: 100%;
}
.navbar {
  float: right;
}
.navbar #search {
  background: #eee;
  border: 2px solid #ffffff26;
  border-radius: 50px;
  color: #000;
  padding-top: 5px;

}
.navbar i {
  position: absolute;
  color: #35495e;
  right: 20px;
  top: 20px;
}
@media only screen and (max-width: 680px) {
  .navbar #search {
   display:none;
    width: 100px;
  }
  .navbar i {
    display: none;
  }
}
</style>