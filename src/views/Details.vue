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
              <v-select
                :items="categories"
                v-model="selectedCategory"
                item-text="name"
                label="Select a category"
                v-on:change="filterExercises"
                return-object
              ></v-select>
              <v-select
                v-if="this.selectedCategory !== null"
                :items="exercises"
                v-model="selectedExercise"
                item-text="name"
                label="Select an exercise"
                return-object
              ></v-select>
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
    <v-container>
      <v-layout justify-center align-center>
        <v-flex xs6>
          <v-expansion-panel
            class="expansion-panel"
            v-for="(set, index) in workout.sets"
            v-bind:key="set.id"
          >
            <ExcerciseCard
              v-bind:workoutId="workout.id"
              :set="set"
              :index="index"
              v-on:emit-add="addSet"
              v-on:delete-set="deleteSet"
            ></ExcerciseCard>
            <br>
          </v-expansion-panel>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import ExcerciseCard from "../components/ExcerciseCard.vue";

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
      selectedCategory: null,
      exercises: [],
      selectedExercise: null,
      dialog: false
    };
  },
  async mounted() {
    if (this.id > 0) {
      this.workout = await this.$workOutService.getById(this.id);
      this.categories = await this.$categoryService.getAll();
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
    async addExercise() {
      this.workout.sets.push({
        exercise: { weight: 0, reps: 0, ...this.selectedExercise }
      });

      await this.$workOutService.update(this.workout, this.workout.id);
      
      this.workout = await this.$workOutService.getById(this.workout.id);
      this.dialog = false;
    },
    filterExercises() {
      this.exercises = this.selectedCategory.exercises;
    }
  }
};
</script>

<style>
.expansion-panel {
  padding: 10px;
}
</style>


