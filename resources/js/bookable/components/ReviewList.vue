<template>
  <div class="container-review">
    <h2 class="col-12">Review List</h2>
    <div v-if="loading">Loading ...</div>
    <div v-else>
      <div class="row review" v-for="(review, index) in reviews" :key="index">
        <div class="col-m-8">Siyamak Abasnezhad</div>
        <div class="col-m-4">{{ review.rating}}
          <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i> 
        </div>
        <div class="col-m-12">{{review.created_at|fromNow}}</div>
        <div class="col-m-12">{{review.content}}</div>
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
  </div>
</template>
<script>
export default {
  props: {
    bookableId:{
      type:[String, Number],
      required: true,
    }
  },

  data() {
    return {
      loading: false,
      reviews: null,
    };
  },
  created() {
    this.loading = true;
    axios
      .get(`/api/bookables/${this.bookableId}/reviews`)
      .then((response) => {
        this.reviews = response.data.data;
      })
      .then(() => {
        this.loading = false;
      });
  },
};
</script>
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