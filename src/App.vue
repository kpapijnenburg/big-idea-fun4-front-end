<template>
  <v-app>
    <Header></Header>
    <v-content>
      <WeekNumber></WeekNumber>
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import WeekNumber from "./components/WeekNumber.vue";

export default {
  name: "App",
  components: {
    Header,
    WeekNumber
  },
  data() {
    return {
      //
    };
  }
};
</script>
