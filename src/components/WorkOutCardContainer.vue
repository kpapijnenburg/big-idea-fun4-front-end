<template>
  <v-container grid-list-sm justify-center>
    <v-layout row wrap>
      <v-flex v-for="workout in workouts" v-bind:key="workout.id" xs3>
        <WorkOutCard :workout="workout"></WorkOutCard>
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
  props: ["workouts"]
};
</script>

<style>
</style>


