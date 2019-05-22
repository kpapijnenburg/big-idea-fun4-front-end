<template>
  <v-layout row justify-center>
    <v-flex xs12 sm3>
      <v-card>
        <v-list two-line>
          <v-subheader>{{this.set.exercise.name}}</v-subheader>
          <v-divider></v-divider>
          <SetComponent :setInfo="set"></SetComponent>
          <v-divider></v-divider>
          <v-layout justify-end>
            <v-btn fab small color="primary">
              <v-icon>add</v-icon>
            </v-btn>
          </v-layout>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import SetComponent from "./SetComponent.vue";

export default {
  name: "ExcerciseCard",
  components: {
    SetComponent
  },
  props: ["set"]
};
</script>

<style>
</style>


