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
        component: () => import('../page/manage'),
        name: '',
        children: [{
            path: '',
            component: () => import('../page/home'),
            meta: ['数据统计']
        }, {
            path: '/datum',
            component: () => import('../page/home'),
            meta: ['数据统计']
        },
        {
            path: '/usageDatum',
            component: () => import('../page/usageDatum'),
            meta: ['用量统计']
        }]
    }
]
export default new Router({
    routes
})