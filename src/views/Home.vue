<template>
  <v-content>
    <br>
    <v-layout align-center justify-center>
      <v-btn flat icon>
        <v-icon>keyboard_arrow_left</v-icon>
      </v-btn>
      <h2 class="display-1">Week: 16</h2>
      <v-btn flat icon>
        <v-icon>keyboard_arrow_right</v-icon>
      </v-btn>
    </v-layout>

    <WorkOutCardContainer></WorkOutCardContainer>
    
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
