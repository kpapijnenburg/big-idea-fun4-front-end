import { ExerciseService } from "../services/ExerciseService.js";

export default {
  install(Vue, config) {
    Vue.prototype.$exerciseService = new ExerciseService(config.baseUrl);
  }
};
