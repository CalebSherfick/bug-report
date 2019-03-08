<template>
  <div class="bugs col-12 d-flex justify-content-center mt-5">
    <ul v-for="bug in allBugs" :key="bug.id">
      <li @click="setActiveBug(bug)">
        <router-link :to="{name: 'details', params:{id: bug._id}}">{{bug.title}}</router-link>
      </li>
    </ul>
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
}
</style>
