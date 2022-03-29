<template>
    <div>
        <img src="https://pbs.twimg.com/media/DIYJPGiUMAIKnTu.jpg" alt="Vuejs vs React" />
        <router-link :to="{ name: Routes.UserProfile }">UserProfile</router-link>
        <button @click="redirectToViewB">Redirect to View B</button>
        <input type="text" placeholder="id 'route' param to viewB" v-model="id" />
        <input type="text" placeholder="q 'query' param to viewB" v-model="query" />
    </div>
</template>

<script setup lang="ts">
import { Routes } from '@/router';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const id = ref("")
const query = ref("")

function redirectToViewB() {
    console.log("redirecting to user profile");
    router.push({
        name: Routes.ViewB,
        params: {
            id: id.value
        },
        query: {
            q: query.value
        }
    })
}
</script>

<style scoped>
</style>