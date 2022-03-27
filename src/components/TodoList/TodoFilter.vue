<template>
    <input id="query" type="query" v-model="filter.query" placeholder="Search" />
    <br />
    <label for="includeCompleted">Include completed</label>
    <input type="checkbox" id="includeCompleted" v-model="filter.includeCompleted" />
    <br />
    <label for="includeNonCompleted">Include Non completed</label>
    <input type="checkbox" id="includeNonCompleted" v-model="filter.includeNonCompleted" />
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
import type { Filter } from "./Models";

const filter: Filter = reactive({ query: "", includeCompleted: true, includeNonCompleted: true })

const emits = defineEmits<{
    (e: "filter-change", filter: Filter): void
}>();

watch(filter, () => {
    emits('filter-change', filter)
})

</script>
