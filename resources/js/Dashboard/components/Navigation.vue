<template>
  <div id="navigation">
    <div class="navbar">
      <input type="search" name="search" id="search" placeholder=" Search ..." />
      <i class="fas fa-search"></i>
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

<style>
#navigation {

  background: #111;
  border-bottom: 1px solid #ffffff26;
  height: 60px;
}
.navbar {
  float: right;
}
.navbar #search {
  background: #eee;
  padding: 5px;
  margin-right: 100px;
  border: 2px solid #ffffff26;
  border-radius: 50px;
  color: #000;
  margin-top: 15px;
}
.navbar i {
position: absolute;
    color: #35495e;
    right: 111px;
    top: 23px;
}
</style>