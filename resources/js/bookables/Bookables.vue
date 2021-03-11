<template>
  <div class="col-m-12">
    <div v-if="loading" class="loading">this is loading wait ....</div>
    <div v-else>
      <div class="row" v-for="row in rows" :key="'row' + row">
        <div
          class="col-4 bookablelist"
          v-for="(bookable, column) in bookableInRow(row)"
          :key="'row' + row + column"
        >
          <bookable-list-item
            :title="bookable.title"
            :description="bookable.description"
            :id="bookable.id"
          ></bookable-list-item>
        </div>
        <div v-for="p in placeholdersInRow(row)" :key="'placeholder' + row + p"></div>
      </div>
    </div>
  </div>
</template>
    
<script>
import BookableListenItem from "./components/BookableListenItem.vue";
export default {
  components: {
    "bookable-list-item": BookableListenItem,
  },

  data() {
    return {
      bookables: null,
      loading: false,
      columns: 3,
    };
  },
  computed: {
    rows() {
      return this.bookables == null
        ? 0
        : Math.ceil(this.bookables.length / this.columns);
    },
  },
  methods: {
    bookableInRow(row) {
      return this.bookables.slice((row - 1) * this.columns, row * this.columns);
    },
    placeholdersInRow(row) {
      return this.columns - this.bookableInRow.length;
    },
  },
  created() {
    this.loading = true;
    axios
      .get("/api/bookables/")
      .then((response) => {
        console.log(response);
        this.bookables = response.data.data;
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style scoped>
div .loading {
  color: #ebebeb;
  text-align: center;
  margin-top: 50px;
  font-size: 2rem;
}
@media only screen and (max-width: 680px) {
  .row {
    margin: 60px 0 0 30px;
  }
}
</style>