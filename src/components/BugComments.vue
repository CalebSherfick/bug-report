<template>
  <div class="bugComments">
    <div class="offset-1 col-10" v-for="comment in allComments" :key="comment.id">
      <div class="card"
        :class="{'pending':comment.flagged == 'pending', 'completed':comment.flagged == 'completed', 'rejected':comment.flagged == 'rejected'}">
        <div class="card-body">
          <h6 class="card-title">Comment By: {{comment.creator}}</h6>
          <h4>{{comment.content}}</h4>
          <p>{{comment.createdAt | formatTime}}</p>
          <i class="fas fa-trash-alt" @click="deleteComment(comment._id)"></i>

          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Flag
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
              <a class="dropdown-item" @click="changeFlag(comment._id, 'completed')">Complete </a>
              <a class="dropdown-item" @click="changeFlag(comment._id, 'rejected')">Reject</a>
              <a class="dropdown-item" @click="changeFlag(comment._id, 'pending')">Pending</a>
            </div>
          </div>

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
    methods: {
      deleteComment(commentID) {
        this.$store.dispatch("deleteComment", commentID);
      },
      changeFlag(commentID, str) {
        this.$store.dispatch("changeFlag", { commentID, str });
      }
    },
    components: {}
  };
</script>




<style>
  .card {
    min-width: 100rem;
  }

  .pending {
    background-color: #bee5eb;
  }

  .completed {
    background-color: #c3e6cb;
  }

  .rejected {
    background-color: #f5c6cb;
  }

  .fas:hover {
    cursor: pointer;
  }
</style>