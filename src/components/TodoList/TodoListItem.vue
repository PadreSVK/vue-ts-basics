<template>
    <li>
        <div class="row">
            <input type="checkbox" :checked="props.done" @input="toggle" />
            {{ completedMark }}
            <div :class="{ strikethrough: done }">{{ description }}</div>
            {{ datetime }}
        </div>
    </li>
</template>
<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
    done: boolean
    description: string
    completed?: Date | null
}>()
const emit = defineEmits<{
    (e: "toggle-item", checked: boolean): void
}>()

const datetime = computed(() =>
    props.done
        ? "📅" + props.completed?.toLocaleString()
        : "🥔🥔"
)

const completedMark = computed(() => props.done ? "✔" : "❌")

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