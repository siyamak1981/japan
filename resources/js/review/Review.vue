<template>
  <div class="row review-rating">
    <div class="col-12">
      <label for="text-muted">Select the Star Rating(1 is worse 5 is best)</label>
      <star-rating  class="star" v-model="review.rating"></star-rating>
    </div>
    <div class="col-12">
      <label for="Message">Descript your experience with:</label>
      <textarea name="content" v-model="review.content" id="form-control" cols="30" rows="10"></textarea>
    </div>
    <button class="btn btn-block">Check!</button>
  </div>
</template>
<script>
export default {

data(){
    return{
        review:{

            rating:5,
            content:null
        }
    }
}
};
</script>
<style scoped>
.review-rating {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 100px 0 0 100px;
}
.star {
  margin: 20px 0 20px 0;
}
#form-control {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.btn-block {
  background: #42b983;
  padding: 7px;
  margin: 15px;
  border-radius: 5px;
  color: #111;
  width: 19%;
  display: block;
  cursor: pointer;
  font-weight: bolder;
  border: none;
}
.btn-block:hover {
  background-color: #35495e;
  color: #ebebbe;
}
label {
  text-transform: capitalize;
  font-size: 1.2rem;
}
@media only screen and (max-width: 680px) {
  .review-rating {
    margin: 100px 0 0 100px;
  }
}
</style>