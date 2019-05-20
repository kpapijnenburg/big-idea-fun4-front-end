import { WorkOutService } from '../services/WorkOutService.js'

export default {
       install(Vue, options){
           Vue.prototype.$workOutService = new WorkOutService(options)
       }
}