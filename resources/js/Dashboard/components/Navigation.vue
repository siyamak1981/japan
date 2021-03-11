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

<style>
#navigation {
  background: #111;
  border-bottom: 1px solid #ffffff26;
  height: 60px;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
}
.navbar {
  float: right;
}
.navbar #search {
  background: #eee;
  margin-right: 100px;
  border: 2px solid #ffffff26;
  border-radius: 50px;
  color: #000;
  padding-top: 5px;
}
.navbar i {
  position: absolute;
  color: #35495e;
  right: 130px;
  top: 20px;
}
@media only screen and (max-width: 680px) {
  .navbar #search {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-right: 200px;
    width: 100px;
  }
  .navbar i {
    right: 220px;
    top: 20px;
  }
}
</style>