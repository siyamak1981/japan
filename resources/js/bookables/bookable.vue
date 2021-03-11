<template>
  <div class="row">
    <div v-if="!loading">
      <div class="col-m-8">
        <div class="card">
          <div class="card-header">{{bookable.title}}</div>
          <div class="card-body">{{bookable.description}}</div>
        </div>
        <review-list></review-list>
      </div>
      <Availability />
    </div>
    <div v-else>this loading ...</div>
  </div>
</template>

<style  scoped>
div .row {
  margin-left: 100px;
  margin-right: 100px;
  
}
.card {
  border: 1px solid #ffffff26;
  width: 100%;
  height: auto;
  overflow: auto;
  padding: 10px;
}
.card-header {
  border-bottom: 1px solid #ffffff26;
  width: 100%;
  padding-bottom: 20px;
  text-align: center;
  color: #eee;
}
.card-body {
  color: #eee;
  padding: 40px 10px;
}
@media only screen and (max-width: 680px) {
div .row {
  margin:50px 10px 0 72px
  
}
}
</style>
<script>
import Availability from "./components/Availability.vue";
import ReviewList from "./components/ReviewList.vue";
export default {
  data() {
    return {
      bookable: null,
      loading: false,
    };
  },
  components: {
    Availability,
    ReviewList
  },
  created() {
    this.loading = true;
    axios
      .get(`/api/bookables/${this.$route.params.id}`)
      .then((response) => {
        this.bookable = response.data.data;
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>