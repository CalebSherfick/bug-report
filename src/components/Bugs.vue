<template>
  <div class="bugs col-12 d-flex justify-content-center mt-5">
    <table class="table col-md-10">
      <thead class="thead-dark">
        <tr>
          <th>Title</th>
          <th>Reported By</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody v-for="bug in allBugs" :key="bug.id">
        <tr @click="setActiveBug(bug); $router.push({name: 'bugDetails', params:{id: bug._id}})">
          <td>{{bug.title}}</td>
          <td>{{bug.creator}}</td>
          <td>{{bug.closed? "Closed" : "Open"}}</td>
          <td>{{bug.createdAt | formatTime}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Moment from "moment";
export default {
  name: "bugs",
  props: [],
  data() {
    return {};
  },
  computed: {
    allBugs() {
      return this.$store.state.bugs;
    }
  },
  methods: {
    setActiveBug(bug) {
      this.$store.dispatch("setActiveBug", bug);
    }
  },
  filters: {
    formatTime(date) {
      return Moment(String(date)).format("MMMM Do YYYY, h:mm:ss a");
    }
  },
  components: {}
};
</script>

<style>
li {
  list-style: none;
  cursor: pointer;
  color: black;
}
</style>
