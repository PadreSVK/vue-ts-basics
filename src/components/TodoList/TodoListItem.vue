<template>
    <li>
        <div class="row">
            <input
                type="checkbox"
                :checked="props.done"
                @input="emit('toggle-item', $event.target.checked)"
            />
            {{ completedMark }}
            <div :class="{ strikethrough: done }">{{ description }}</div>
            {{ datetime }}
        </div>
    </li>
</template>
<script setup lang="ts">
import { computed } from "vue";

interface Props {
    done: boolean
    description: string
    completed?: Date | null
}

const props = defineProps<Props>()

const datetime = computed(() =>
    props.done
        ? "📅" + props.completed?.toLocaleString()
        : "🥔🥔"
)

const completedMark = computed(() => props.done ? "✔" : "❌")
const emit = defineEmits(["update:description", "toggle-item"])

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