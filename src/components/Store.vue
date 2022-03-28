
<template>
    <br />
    <h1>
        {{ store.count }}
        {{ store.age }}
        {{ store.double }}
        <button
            @click="changeStore"
        >Click me</button>
    </h1>

    <YesNo />
</template>

<script setup lang="ts">
import { useCounterStore } from "@/store";
import YesNo from './YesNo.vue';
const store = useCounterStore()

function changeStore() {
    // via action (n mutations)
    // store.increment()

    // direct change (2 changes)
    // store.count = 50
    // store.age = 100

    //change via patch = one change
    store.$patch({
        age: 100,
        count: 50
    })
}
</script>
