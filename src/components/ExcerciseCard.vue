<template>
  <v-layout>
    <v-expansion-panel-content>
      <template v-slot:header>
        <div>#{{computedIndex}} - {{set.exercise.name}}</div>
      </template>
      <v-card>
        <SetComponent :setInfo="set"></SetComponent>
        <v-divider></v-divider>
        <v-layout justify-end>
          <v-btn v-on:click="add" fab small color="primary">
            <v-icon>add</v-icon>
          </v-btn>
          <v-btn v-on:click="deleteSet" fab small color="red">
            <v-icon>delete</v-icon>
          </v-btn>
        </v-layout>
      </v-card>
    </v-expansion-panel-content>
  </v-layout>
</template>

<script>
import SetComponent from "./SetComponent.vue";

export default {
  name: "ExcerciseCard",
  components: {
    SetComponent
  },
  props: ["set", "workoutId", "index"],
  computed: {
    computedIndex: function() {
      return this.index + 1;
    }
  },
  methods: {
    add() {
      const newSet = {
        exercise: this.set.exercise,
        weight: 0,
        reps: 0
      };

      this.$emit("emit-add", newSet);
    },
    deleteSet() {
      this.$emit("delete-set", this.set);
    }
  }
};
</script>

<style>
</style>


