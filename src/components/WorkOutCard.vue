<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-card height="100%" width="100%">
        <v-card-title primary-title>
          <div class="text-xs-center">
            <h2 headline mb-0>{{workout.name}}</h2>
            <p>{{workout.date | formatDate}}</p>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn v-on:click="details(workout.id)" color="primary" flat block>Details</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "WorkOutCard",
  props: ["workout"],
  methods: {
    details(id) {
      this.$router.push("/details/" + id);
    }
  }
};
</script>

<style>
</style>


