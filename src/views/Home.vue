<template>
  <div class="home container-fluid">
    <div class="row">
      <h1 class="title mt-4 col-12 text-center">Bug Reporter</h1>
    </div>
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="addBug">
          <div class="form-inline my-4 col-12 d-flex justify-content-center">
            <input required v-model="newBug.creator" type="text" class="form-control" placeholder="Your Name">
            <input required v-model="newBug.title" type="text" class="form-control" placeholder="Bug">
            <input required v-model="newBug.description" type="text" class="form-control" placeholder="Description">
            <button type="submit" class="btn ml-2">Submit</button>
          </div>
        </form>
      </div>
      <bugs></bugs>
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
        newBug: { creator: '', title: '', description: '' }
      }
    },
    components: {
      Bugs
    },
    methods: {
      addBug() {
        this.$store.dispatch('addBug', this.newBug);
        event.target.reset()
      }
    }
  }
</script>

<style>
  .btn {
    background-color: #625757;
    color: #f9f9f9;
  }

  .title {
    color: #625757;
  }
</style>