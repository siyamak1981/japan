<template>
  <div class="container-fluid" id="navigation">
    <div class="row">
      <div class="col-12">
        <div class="navbar">
          <input type="search" name="search" id="search" placeholder=" Search ..." />
          <i class="fas fa-search"></i>
        </div>
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

<style>
#navigation {
  margin-left: 75px;
  background: #000;
  border-bottom: 1px solid #610116;
  height: 60px;
}
.navbar {
  float: right;
}
.navbar #search {
  position: absolute;
  right: 250px;
  background: #ebebeb;
  padding: 5px;
  border: 2px solid #610116;
  border-radius: 50px;
  color: #000;
  color: #000;
}
.navbar i {
  position: relative;
  color: #fa1e4e;
  right: 252px;
  padding: 6px;
}
</style>