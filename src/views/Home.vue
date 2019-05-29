<template>
  <v-content>
    <WorkOutCardContainer :workouts="this.workouts"></WorkOutCardContainer>
    <br>
    <v-layout align-center justify-center>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Start new workout</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">New workout</span>
          </v-card-title>
          <v-card-text>
            <v-text-field
              :rules="[rules.required]"
              v-model="workoutName"
              label="Workout name"
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="addWorkout">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-content>
</template>

<script>
import WorkOutCardContainer from "../components/WorkOutCardContainer.vue";

export default {
  name: "Home",
  components: {
    WorkOutCardContainer
  },
  data() {
    return {
      rules: {
        required: v => !!v || "Please enter a name for your workout."
      },
      workouts: [],
      dialog: false,
      workoutName: "",
      userId: null
    };
  },
  async mounted() {
    this.userId = this.$store.state.userId

    if (this.userId != null) {
      this.workouts = await this.$workOutService.getByUserId(this.userId);
    }
  },
  methods: {
    addWorkout() {
      this.dialog = false;

      if (this.userId > 0) {
        const workout = {
          userId: this.userId,
          name: this.workoutName,
          date: Date.now(),
          sets: []
        };
        if (this.$workOutService.create(workout)) {
          this.workouts.push(workout);
        }
      }
    }
  }
};
</script>
