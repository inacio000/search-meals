import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
];

const route = createRouter({
    history: createWebHistory(),
    routes,
})

export default route;