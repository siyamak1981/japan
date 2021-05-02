<template>
  <div style="overflow-x:auto;">
    <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Points</th>
        <th>Points</th>
        <th>Points</th>
      </tr>
      <tr v-for="(userDetaile, index) in userDetailes" :key="index">
        <td>{{userDetaile.name}}</td>
        <td>{{userDetaile.email}}</td>
        <td>{{userDetaile.created_at}}</td>

        <td>50</td>
        <td>50</td>
      </tr>
    </table>
  </div>
</template>
<script scoped>
import { mapState, mapGetters } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("me");
  },
  computed: {
    ...mapGetters({
      userDetailes: "userDetailes",
    }),
  },
};
</script>
<style>
table {
  border-collapse: collapse;
  width: 90%;
  margin: 50px 100px 50px 70px;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr {
  background-color: transparent;
  border: 1px solid #ffffff26;
}
</style>