<template>
    <p>{{ name }}</p>

    <img :src="photo" />
</template>

<script setup lang="ts">

import { mapState } from "pinia";
import { useUserProfileStore } from "@/store/userProfile";
import { computed } from "@vue/reactivity";

const store = useUserProfileStore()
store.loadProfile()

const photo = computed(() => store.model?.photo)
const name = computed(() => store.model?.name)


</script>

<style scoped>
</style>