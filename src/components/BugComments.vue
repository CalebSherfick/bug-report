<template>
  <div class="bugComments">
    v-for="bug in allBugs" :key="bug.id"
    <div class="offset-1 col-10">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Comment By: {{}}</h4>
          {{activeBug.description}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "bugComents",
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