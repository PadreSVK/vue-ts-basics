<template>
    <div>
        <img :src="store.model?.image" alt="asdas">

        <button @click="changeAnswer" >Change answer</button>
    </div>
</template>

<script setup lang="ts">
import { useYesNoStore } from "@/store";

const store = useYesNoStore()

function changeAnswer() {
    store.changeAnswer()
}



</script>

<style scoped>

</style>