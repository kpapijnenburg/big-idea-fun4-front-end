<template>
  <v-container grid-list-sm justify-center>
    <v-layout row wrap>
      <v-flex v-for="workout in workouts" v-bind:key="workout.id" xs3>
        <WorkOutCard :name="workout.name" :date="workout.date"></WorkOutCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import WorkOutCard from "./WorkOutCard.vue";

export default {
  name: "WorkOutCardContainer",
  components: {
    WorkOutCard
  },
  data() {
    return {
      workouts: null
    };
  },
  async mounted() {
    const userId = this.getUserId();

    if (userId != null) {
      this.workouts = await this.$workOutService.getByUserId(userId);
      console.log(this.workouts);
    }
  },
  methods: {
    getUserId() {
      let value = "; " + document.cookie;
      let parts = value.split("; " + "userId" + "=");

      if (parts.length == 2) {
        return parts
          .pop()
          .split(";")
          .shift();
      }
    }
  }
};
</script>

<style>
</style>


