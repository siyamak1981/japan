<template>
  <div class="container-review">
    <h2 class="col-12">Review List</h2>
    <div class="row review" v-for="(number, index) in 3" :key="index">
      <div class="col-m-8">text to text</div>
      <div class="col-m-4">test for star</div>
      <div class="col-m-12">test for div2</div>
      <div class="col-m-12">test for div3</div>
      <div class="col-12">
        <div class="horizontal_line">
          <div class="line_left"></div>
          <div class="left_circle"></div>
          <div class="central_circle"></div>
          <div class="right_circle"></div>
          <div class="line_right"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container-review {
  float: left;
  margin-top: 50px;
  width: 100%;
}
h2 {
  text-transform: capitalize;
  color: #42b983;
}

.horizontal_line {
  margin: 30px;
  height: 26px;
  position: relative;
}

.line_left,
.line_right {
  border-top: 1px solid #434247;
  width: 250px;
  margin-top: 13px;
}

.line_left {
  float: left;
}

.line_right {
  float: right;
}

.left_circle,
.central_circle,
.right_circle {
  background: rgb(69, 68, 73);
  background: rgba(255, 255, 255, 0.15);
  position: absolute;
  border-radius: 50px;
}

.left_circle,
.right_circle {
  width: 13px;
  height: 13px;
  top: 7px;
}

.left_circle {
  left: 280px;
}

.central_circle {
  width: 26px;
  height: 26px;
  top: 0px;
  left: 289px;
}

.right_circle {
  left: 310px;
}
@media only screen and (max-width: 680px) {
  .line_left,
  .line_right {
    width: 40px;
  }
  .left_circle {
  left: 58px;
}

.central_circle {

  left: 68px;
}

.right_circle {
  left: 90px;
}
}

</style>