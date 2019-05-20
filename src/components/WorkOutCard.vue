<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-card height="100%" width="100%">
        <v-card-tile primary-title>
          <div class="text-xs-center">
            <h2 headline mb-0>{{name}}</h2>
            <p>{{date | formatDate}}</p>
          </div>
        </v-card-tile>

        <v-card-actions justify-end>
          <router-link to="/details">
            <v-btn class="router-btn" flat color="blue">Details</v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "WorkOutCard",
  props: ["name", "date"]
};
</script>

<style>
.router-btn {
  text-decoration: none;
}
</style>


