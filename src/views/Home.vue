<template>
    <div class="flex p-8 flex-col">

        <div class="flex justify-center gap-2 mt-2">
            <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter">
                {{ letter }}
            </router-link>
        </div>

        <pre>{{ ingredients }}</pre>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import api from '../api';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

const ingredients = ref([])

onMounted(async () => {
    const response = await api.get('/list.php?i=list')
    console.log(response.data)

    ingredients.value = response.data
})


</script>