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
        <tr @click="setActiveBug(bug); $router.push({name: 'details', params:{id: bug._id}})">
          <td>{{bug.title}}</td>
          <td>{{bug.creator}}</td>
          <td v-show="!bug.closed">Open</td>
          <td v-show="bug.closed">Closed</td>
          <td>{{bug.createdAt}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
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
