import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: () => import('../page/login')
    }
]
export default new Router({
    routes
})