<template>
  <div class="bugComments">
    <div class="offset-1 col-10" v-for="comment in allComments" :key="comment.id">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Comment By: {{comment.creator}}</h4>
          <p>{{comment.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    methods: {},
    components: {}
  };
</script>




<style>
</style>