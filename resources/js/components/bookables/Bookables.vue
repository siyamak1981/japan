<template>
  <div class="col-m-12">
    <div v-if="loading" class="loading">this is loading wait ....</div>
    <div v-else>
      <div class="row" v-for="row in rows" :key="'row' + row">
        <div
          class="col-4"
          v-for="(bookable, column) in bookableInRow(row)"
          :key="'row' + row + column"
        >
          <bookable-list-item
            :title="bookable.title"
            :description="bookable.description"
            :price="bookable.id"
          ></bookable-list-item>
        </div>
        <div v-for="p in placeholdersInRow(row)" :key="'placeholder' + row + p"></div>
      </div>
    </div>
  </div>
</template>
    
<script>
import BookableListenItem from "./BookableListenItem.vue";
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
    const p = new Promise((resolve, reject) => {
      // console.log(resolve);
      // console.log(reject);
      setTimeout(() => {
        resolve("hello");
      }, 3000);
    })
      .then((response) => {
        // console.log(response)
      })
      .catch((error) => {
        // console.log("error)",error);
      });

    axios
      .get("bookables")
      .then((response) => {
        this.bookables = response.data.bookables;
        console.log(this.bookables);
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
</style>