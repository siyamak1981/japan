<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      lastSearch: this.$store.state.lastSearch,
    };
  },
  computed: {
    ...mapState({
      lastSearchComputed: "lastSearch",
    }),
  },
};
</script>