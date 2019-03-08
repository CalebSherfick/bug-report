<template>
  <div class="bugs col-12 d-flex justify-content-center mt-5">
    <ul v-for="bug in allBugs" :key="bug.id" class="list-group d-flex flex-column row">
      <li @click="setActiveBug(bug)" class="list-group-item offset-2 col-md-10">
        <router-link :to="{name: 'details', params:{id: bug._id}}">{{bug.title}}</router-link>
      </li>
    </ul>
  </div>
</template>


<template>
  <div class="bugs col-12 d-flex justify-content-center mt-5">
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Reported By</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody v-for="bug in allBugs" :key="bug.id">
        <tr>
          <td>{{bug.title}}</td>
          <td>{{bug.creator}}</td>
          <td>{{bug.closed}}</td>
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
