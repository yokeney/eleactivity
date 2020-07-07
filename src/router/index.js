/*
 * @Author: your name
 * @Date: 2020-07-07 10:24:42
 * @LastEditTime: 2020-07-07 11:56:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-audition-h5\src\router\index.js
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'
import Trace from '../views/home.vue'//author

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'home',
        component: Trace
    },
    {
        path: '/check',
        name: 'check',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        //component: () => import(/* webpackChunkName: "about" */ '../views/check.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
