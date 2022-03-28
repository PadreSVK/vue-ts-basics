<template>
    <li>
        <div class="row">
            <input type="checkbox" :checked="props.completed" @input="toggle" />
            {{ completedMark }}
            <div :class="{ strikethrough: completed }">{{ title }}</div>
            <!-- {{ datetime }} -->
        </div>
    </li>
</template>
<script setup lang="ts">
import { computed } from "vue";


const props = defineProps<{
    title: string
    completed: boolean
}>()
const emit = defineEmits<{
    (e: "toggle-item", checked: boolean): void
}>()


const completedMark = computed(() => props.completed ? "✔" : "❌")

function toggle(event: Event) {
    emit('toggle-item', (event.target as any).checked)
}

</script>

<style scoped>
.row {
    display: flex;
    flex-direction: row;
}
.strikethrough {
    text-decoration: line-through;
}
</style>