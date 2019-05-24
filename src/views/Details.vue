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
      <v-layout align-center justify-center>
        <v-btn v-on:click="addExercise" color="primary">Add Exercise</v-btn>
      </v-layout>
    </v-container>
    <v-expansion-panel>
      <ExcerciseCard
        v-for="set in workout.sets"
        v-bind:workoutId="workout.id"
        v-bind:key="set.id"
        :set="set"
        v-on:emit-add="addSet"
        v-on:delete-set="deleteSet"
      ></ExcerciseCard>
    </v-expansion-panel>
    <br>
    <v-flex sm9>
      <v-layout justify-end></v-layout>
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
      console.log(this.workout);
    }
  },
  methods: {
    async addSet(newSet) {
      this.workout.sets.push(newSet);
      this.$workOutService.update(this.workout, this.id);
    },
    async deleteSet(set) {
      if (confirm("Are you sure you want to delete this set?")) {
        this.workout.sets = this.workout.sets.filter(function(obj) {
          return obj.id !== set.id;
        });
        if (!this.$setService.delete(set.id)) {
          alert("Unable to delete set.");
        }
      }
    },
    addExercise() {}
  }
};
</script>

<style>
</style>


