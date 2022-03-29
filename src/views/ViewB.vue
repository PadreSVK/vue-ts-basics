<template>
    <div>
        View B
        <img src="https://miro.medium.com/max/400/1*ekaFqk38CV2GNTquivy7Dw.png" alt="vue" />
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
console.log(route.params.id)
console.log(route.query)

</script>

<style scoped>
</style>