<template>
  <div class="bugComments">
    <div class="offset-1 col-10" v-for="comment in allComments" :key="comment.id">
      <div class="card">
        <div class="card-body">
          <h6 class="card-title">Comment By: {{comment.creator}}</h6>
          <h4>{{comment.content}}</h4>
          <p>{{comment.createdAt | formatTime}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Moment from "moment";
  export default {
    name: "bugComents",
    mounted() {
      this.$store.dispatch('getAllComments')
    },
    props: [],
    data() {
      return {};
    },
    computed: {
      allComments() {
        return this.$store.state.comments;
      }
    },
    filters: {
      formatTime(date) {
        return Moment(String(date)).format("MMMM Do YYYY, h:mm:ss a");
      }
    },
    methods: {},
    components: {}
  };
</script>




<style>
  .card {
    min-width: 100rem;
  }
</style>