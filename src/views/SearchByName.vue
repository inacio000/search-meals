<template>
    <div class="p-8">
        <input type="text" v-model="keyword" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals"
            @change="searchMeals">
    </div>

    <div class="grid grid-cols-1 m:grid-cols3 gap-4 p-8">
        <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
            <img :src="meal.strMealThumb" class="rounded-t-xl w-full h-48 object-cover">
            <div class="px-3">
                <h3 class="font-bold">{{ meal.strMeal }}</h3>
                <p class="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa consequuntur recusandae laudantium. Qui cum deserunt officia repellendus aspernatur eligendi quidem culpa.
                </p>
                <div class="flex items-center justify-between">
                    <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border-red-600 border-2 bg-red-500 hover:bg-red-600 text-white hover:text-white transition">YouTube</a>
                    <router-link to="/" class="px-3 py-2 rounded border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition">View</router-link>
                    <!-- <pre>{{ meal.idMeal }}</pre> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { computed } from '@vue/reactivity'
import store from '../store';

const keyword = ref('');

const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
}

</script>