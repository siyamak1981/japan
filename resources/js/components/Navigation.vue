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

  background: #000;
  border-bottom: 1px solid #610116;
  height: 60px;
}
.navbar {
  float: right;
}
.navbar #search {
  background: #ebebeb;
  padding: 5px;
  margin-right: 100px;
  border: 2px solid #610116;
  border-radius: 50px;
  color: #000;
  margin-top: 15px;
}
.navbar i {
position: absolute;
    color: #fa1e4e;
    right: 111px;
    top: 23px;
}
</style>