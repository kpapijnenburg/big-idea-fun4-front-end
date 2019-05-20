<template>
  <v-content>
    <WorkOutCardContainer></WorkOutCardContainer>
    <br>
    <v-layout align-center justify-center>
      <v-btn color="primary">Start new workout</v-btn>
    </v-layout>
  </v-content>
</template>

<script>
import WorkOutCardContainer from "../components/WorkOutCardContainer.vue";

export default {
  name: "Home",
  components: {
    WorkOutCardContainer
  }
};
</script>
