<template>
  <v-container>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>Set: 1</v-list-tile-title>
        <v-list-tile-sub-title>Weight: {{setInfo.weight}}</v-list-tile-sub-title>
        <v-list-tile-sub-title>Reps: {{setInfo.reps}}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
export default {
  name: "SetComponent",
  props: ['setNumber','setInfo']
};
</script>

<style>
</style>


