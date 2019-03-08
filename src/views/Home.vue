<template>
  <div class="home container-fluid">
    <div class="row">
      <h1 class="title mt-4 col-12 text-center">Bug Reporter</h1>
    </div>
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="addBug">
          <div class="form-inline my-4 col-12 d-flex justify-content-center">
            <input v-model="newBug" type="bug" class="form-control" id placeholder="Bug">
            <button type="submit" class="btn btn-primary ml-2">Submit</button>
          </div>
        </form>
      </div>
      <days></days>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Bugs from '@/components/Bugs.vue'

  export default {
    name: 'home',
    mounted() {
      this.$store.dispatch('getAllBugs')
    },
    data() {
      return {
        newBug: ''
      }
    },
    components: {
      Bugs
    },
    methods: {
      addBug() {
        this.$store.dispatch('addBug', { bug: this.newBug })
      }
    }
  }
</script>

<style>

</style>