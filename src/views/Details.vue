<template>
  <v-content>
    <v-container>
      <v-layout align-center justify-center>
        <h2 class="display-1">{{this.workout.name}}</h2>
      </v-layout>
      <br>
      <v-layout align-center justify-center>
        <p class="title">{{this.workout.date | formatDate}}</p>
      </v-layout>
    </v-container>
    <ExcerciseCard
      v-for="set in workout.sets"
      v-bind:workoutId="workout.id"
      v-bind:key="set.id"
      :set="set"
      v-on:emit-add="addSet"
    ></ExcerciseCard>
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
import { constants } from "crypto";

export default {
  name: "Details",
  components: { ExcerciseCard },
  props: ["id"],
  data() {
    return {
      workout: Object
    };
  },
  async mounted() {
    if (this.id > 0) {
      this.workout = await this.$workOutService.getById(this.id);
    }
  },
  methods: {
    async addSet(newSet) {
      this.workout.sets.push(newSet);
      this.workout = await this.$workOutService.update(this.workout, this.id);
    }
  }
};
</script>

<style>
</style>


