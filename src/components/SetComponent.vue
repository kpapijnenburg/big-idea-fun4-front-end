<template>
  <v-container>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>Set: 1</v-list-tile-title>
        <v-list-tile-sub-title>Weight: 60kg</v-list-tile-sub-title>
        <v-list-tile-sub-title>Reps: 10</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-divider></v-divider>
    <v-layout justify-end>
      <v-btn fab small color="primary">
        <v-icon>add</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "SetComponent"
};
</script>

<style>
</style>


