import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: () => import('../page/login'),
        meta: { requiresAuth: false }
    },
    {
        path: '/manage',
        component: () => import('../page/manage'),
        name: '',
        children: [{
            path: '',
            component: () => import('../page/home'),
            meta: { requiresAuth: true, breadcrumb: ['数据统计'] }
        }, {
            path: '/datum',
            component: () => import('../page/home'),
            meta: { requiresAuth: true, breadcrumb: ['数据统计'] }
        },
        {
            path: '/usageDatum',
            component: () => import('../page/usageDatum'),
            meta: { requiresAuth: true, breadcrumb: ['用量统计'] }
        }]
    }
]

const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        let token = window.localStorage.getItem('token')
        if (!token) {
            next({
                path: '/',
                query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        } else {
            next()
        }
    } else {
        next()
    }
})


export default router