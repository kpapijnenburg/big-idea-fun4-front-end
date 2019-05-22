import { SetService } from "../services/SetService.js";

export default {
  install(Vue, config) {
    Vue.prototype.$setService = new SetService(config.baseUrl);
  }
};
