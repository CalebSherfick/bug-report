<template>
  <div class="bugDetails container-fluid">
    <div class="row">
      <div class="col-md-1">
        <i class="fas fa-home fa-2x" @click="leave"></i>
      </div>
      <div class="col-md-10">
        <h1>Bug Details</h1>
      </div>
    </div>
    <div class="row">
      <table class="table offset-1 col-md-10 table">
        <thead class="thead-dark">
          <tr>
            <th>Title</th>
            <th>Reported By</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr :class="{'table-success':!activeBug.closed, 'table-danger': activeBug.closed}">
            <td>{{activeBug.title}}</td>
            <td>{{activeBug.creator}}</td>
            <td><span class="closed-type"
                @click="bugStatus(activeBug._id)">{{activeBug.closed? "Closed" : "Open"}}</span>
            </td>
            <td>{{activeBug.createdAt | formatTime}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row justify-content-center ">
      <div class="col-8">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Description</h4>
            {{activeBug.description}}
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <h1 class="title mt-4 col-12 text-center">Comments</h1>
    </div>
    <div class="row">
      <div class="col-12" v-if="!activeBug.closed">
        <form @submit.prevent="addComment">
          <div class="form-inline my-4 col-12 d-flex justify-content-center">
            <input required v-model="newComment.creator" type="text" class="form-control" placeholder="Your Name">
            <input required v-model="newComment.content" type="text" class="form-control" placeholder="Comment">
            <button type="submit" class="btn btn-primary ml-2">Add Comment</button>
          </div>
        </form>
      </div>
    </div>

    <bug-comments></bug-comments>

  </div>
</template>


<script>
  import Moment from "moment";
  // @ is an alias to /src
  import BugComments from '@/components/BugComments.vue'

  export default {
    name: 'bugDetails',
    mounted() {
      if (!this.activeBug._id) {
        this.$store.dispatch('setActiveBugParam', this.$route.params.id)
      }
    },
    data() {
      return {
        newComment: { creator: '', content: '', flagged: 'pending' }
      }
    },
    computed: {
      activeBug() {
        return this.$store.state.activeBug;
      }
    },
    filters: {
      formatTime(date) {
        return Moment(String(date)).format("MMMM Do YYYY, h:mm:ss a");
      }
    },
    components: {
      BugComments
    },
    methods: {
      addComment() {
        this.$store.dispatch('addComment', this.newComment);
        event.target.reset()
      },
      bugStatus(id) {
        this.$store.dispatch("bugStatus", id);
      },
      leave() {
        this.$router.push({ name: 'home' })
        this.$store.dispatch('getAllComments')
      }
    }
  }
</script>



<style scoped>
  .fa-home:hover {
    cursor: pointer;
  }

  .closed-type:hover {
    cursor: pointer;
  }
</style>