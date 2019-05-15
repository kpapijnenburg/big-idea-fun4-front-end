import { UserService } from '../services/UserService.js'

export default  {
    install(Vue, config) {
        Vue.prototype.$userService = new UserService(config.baseUrl)
    }   
}