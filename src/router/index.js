import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MealList from '../views/MealList.vue'
import SearchByIngredient from '../views/SearchByIngredient.vue'
import SearchByLetter from '../views/SearchByLetter.vue'
import SearchByName from '../views/SearchByName.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [

            {
                path: "/",
                name: "home",
                component: Home,
            },
            {
                path: "/by-letter/:letter?",
                name: "byLetter",
                component: SearchByLetter,
            },
            {
                path: "/by-ingredient/:ingredient?",
                name: "byIngredient",
                component: SearchByIngredient,
            },

        ]
    },
    {
        path: '/guest',
        component: GuestLayout,
        children: [
            {
                path: "/by-name/:name?",
                name: "byName",
                component: SearchByName,
            },
        ]
    }
];

const route = createRouter({
    history: createWebHistory(),
    routes,
})

export default route;