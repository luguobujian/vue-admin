import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: () => import('../page/login')
    },
    {
        path: '/manage',
        component: () => import('../page/manage')
    }
]
export default new Router({
    routes
})