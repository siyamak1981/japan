<template>
  <div class="col-m-12">
    <div v-if="loading">this is loading wait ....</div>
    <div v-else>
      <div class="row" v-for="row in rows" :key="'row' + row">
        <div class="col-4" v-for="(bookable, column) in bookableInRow(row)" :key="'row' + row + column">
          <bookable-list-item
            :item-title="bookable.title"
            :item-content="bookable.content"
            :price="1000"
          ></bookable-list-item>
        </div>
        <div v-for="p in placeholdersInRow(row)" :key="'placeholder' + row + p">
        </div>
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
    placeholdersInRow(row){
      return this.columns - this.bookableInRow.length 
    }
  },
  created() {
    this.loading = true;
    setTimeout(() => {
      this.bookables = [
        {
          title: "php developer",
          content: "this is my proj by php",
        },
        {
          title: "python developer",
          content: "project by python developer",
        },
        {
          title: "php developer",
          content: "this is my proj by php",
        },
        {
          title: "python developer",
          content: "project by python developer",
        },
        {
          title: "php developer",
          content: "this is my proj by php",
        },
        {
          title: "python developer",
          content: "project by python developer",
        },
        {
          title: "php developer",
          content: "this is my proj by php",
        },
        {
          title: "python developer",
          content: "project by python developer",
        },
      ];
      this.loading = false;
    }, 2000);
  },
};
</script>