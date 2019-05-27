import { CategoryService } from "../services/CategoryService.js";

export default {
  install(Vue, config) {
    Vue.prototype.$categoryService = new CategoryService(config.baseUrl);
  }
};
