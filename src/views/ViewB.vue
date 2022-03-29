<template>
    <div>
        View B
        <img :src="url" alt="vue" />

        <input type="text" v-model="queryModel" />
    </div>
</template>

<script setup lang="ts">
import type { YesNoModel } from '@/store';
import { ref, watch } from 'vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()

const url = ref("https://miro.medium.com/max/400/1*ekaFqk38CV2GNTquivy7Dw.png")

const queryModel = ref(route.query.q)

watch(queryModel, (value) => {
    router.push({
        query: {
            d: value
        }
    })
})



watch(() => route.query.q, async (value) => {
    console.log(value)
    const response = await fetch("https://yesno.wtf/api/")
    const result: YesNoModel = await response.json()

    url.value = result.image
})

onBeforeRouteUpdate(async route => {
    console.log(route.query)
    const response = await fetch("https://yesno.wtf/api/")
    const result: YesNoModel = await response.json()

    url.value = result.image
})







</script>

<style scoped>
</style>