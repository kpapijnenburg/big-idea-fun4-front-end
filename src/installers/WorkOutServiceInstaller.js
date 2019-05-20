import { WorkOutService } from "../services/WorkOutService.js";

export default {
  install(Vue, config) {
    Vue.prototype.$workOutService = new WorkOutService(config.baseUrl);
  }
};
