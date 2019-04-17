<template>
  <v-container grid-list-sm justify-center>
    <v-layout row wrap>
      <v-flex xs4>
        <WorkOutCard></WorkOutCard>
      </v-flex>
      <v-flex xs4>
        <WorkOutCard></WorkOutCard>
      </v-flex>
      <v-flex xs4>
        <WorkOutCard></WorkOutCard>
      </v-flex>
      <v-flex xs4>
        <WorkOutCard></WorkOutCard>
      </v-flex>
      <v-flex xs4>
        <WorkOutCard></WorkOutCard>
      </v-flex>
      <v-flex xs4>
        <WorkOutCard></WorkOutCard>
      </v-flex>
      <v-flex xs4>
        <WorkOutCard></WorkOutCard>
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
    return [];
  }
};
</script>

<style>
</style>


