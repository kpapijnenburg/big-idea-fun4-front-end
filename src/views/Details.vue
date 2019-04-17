<template>
  <v-content>
    <v-container>
      <v-layout align-center justify-center>
        <h2 class="display-1">Workout name</h2>
      </v-layout>
      <br>
      <v-layout align-center justify-center>
        <p class="title">Monday 15th of April</p>
      </v-layout>
      <v-layout align-center justify-center>
        <router-link to="/">Return home</router-link>
      </v-layout>
    </v-container>
    <ExcerciseCard></ExcerciseCard>
    <br>
    <v-flex sm9>
      <v-layout justify-end>
        <v-btn color="primary">Add</v-btn>
      </v-layout>
    </v-flex>
  </v-content>
</template>

<script>
import ExcerciseCard from "../components/ExcerciseCard.vue";

export default {
  name: "Details",
  components: { ExcerciseCard }
};
</script>

<style>
</style>


