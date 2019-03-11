<template>
  <div class="bugs col-12 d-flex justify-content-center mt-5">
    <table class="table col-md-10 table-hover">
      <thead class="thead-dark">
        <tr>
          <th>Title</th>
          <th>Reported By <i class="fas fa-caret-down" @click="nameFilter"></i></th>
          <th>Status <i class="fas fa-caret-down" @click="statusFilter"></i></th>
          <th>Date <i class="fas fa-caret-down" @click="dateFilter"></i></th>
        </tr>
      </thead>
      <tbody v-for="bug in allBugs" :key="bug.id">
        <tr @click="setActiveBug(bug); $router.push({name: 'bugDetails', params:{id: bug._id}})"
          :class="{'table-success':!bug.closed, 'table-danger': bug.closed}">
          <td>{{bug.title}}</td>
          <td>{{bug.creator}}</td>
          <td><span class="closed-type" @click="bugStatus(bug._id)">{{bug.closed? "Closed" : "Open"}}</span></td>
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
      },
      sortNewest() {
        this.$store.dispatch("sortNewest");
      },
      bugStatus(id) {
        this.$store.dispatch("bugStatus", id);
      },
      statusFilter() {
        let bugArr = this.$store.state.bugs
        bugArr.sort((a, b) => a.closed - b.closed)
      },
      nameFilter() {
        let bugArr = this.$store.state.bugs
        bugArr.sort((a, b) => a.creator.localeCompare(b.creator));
      },
      dateFilter() {
        let bugArr = this.$store.state.bugs
        bugArr.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
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

<style scoped>
  li {
    list-style: none;
    cursor: pointer;
    color: black;
  }

  .closed-type:hover {
    cursor: pointer;
  }

  .fa-caret-down:hover {
    cursor: pointer;
  }
</style>