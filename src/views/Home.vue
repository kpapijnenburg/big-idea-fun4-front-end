<template>
    <v-content>
      <WeekNumber></WeekNumber>
      <WorkOutCardContainer></WorkOutCardContainer>
    </v-content>
</template>

<script>
import WeekNumber from '../components/WeekNumber.vue'
import WorkOutCardContainer from '../components/WorkOutCardContainer.vue'

export default {
  name: "Home",
  components: {
    WeekNumber,
    WorkOutCardContainer
  },
};
</script>
