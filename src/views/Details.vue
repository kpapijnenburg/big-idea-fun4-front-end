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
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">Add exercise</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">New exercise</span>
            </v-card-title>
            <v-card-text>
              <!-- <v-text-field
                :rules="[rules.required]"
                v-model="workoutName"
                label="Workout name"
                required
              ></v-text-field>-->
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" flat @click="addExercise">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
      rules: {
        required: v => !!v || "Please enter a name for your workout."
      },
      workout: Object,
      categories: [],
      exercises: [],
      dialog: false
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
    addExercise() {
      alert("Werkt");
    }
  }
};
</script>

<style>
</style>


