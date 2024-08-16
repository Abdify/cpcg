<script setup lang="ts">
import { Slider } from '@/components/ui/slider'
import { ref } from 'vue'
import generateGridCode from './generate-code'
import { cn } from '@/lib/utils'
import ResultModal from '../ResultModal.vue'

const nItems = ref([6])
const colSpans = ref<number[]>([])
const nColumns = ref([6])
const selected = ref<number>()

const handleSelect = (selectedItem: number) => {
  if (!selected.value) return (selected.value = selectedItem)

  colSpans.value[selected.value] = selectedItem + 1 - selected.value
  selected.value = undefined
}

const handleGenerate = () => generateGridCode(nItems.value[0], nColumns.value[0], colSpans.value)

</script>

<template>
  <div class="flex gap-5">
    <!-- Options -->
    <section class="h-full w-96 shadow p-5 grid gap-5">
      <div>
        <p>Number of Items: {{ nItems }}</p>
        <Slider :default-value="[6]" :max="100" :step="1" lab v-model="nItems" />
      </div>

      <div>
        <p>Number of Columns: {{ nColumns }}</p>
        <Slider :default-value="[6]" :max="20" :step="1" lab v-model="nColumns" />
      </div>

      <ResultModal :on-generate="handleGenerate" />
    </section>

    <!-- Result -->
    <section class="w-full">
      <div class="grid gap-5" :style="{ gridTemplateColumns: `repeat(${nColumns[0]}, 1fr)` }">
        <div v-for="(item, i) in nItems[0]" :key="item" :class="cn(
          'bg-gray-200 text-3xl rounded-lg py-8 flex items-center justify-center transition-colors hover:bg-slate-300',
          selected && '',
          item === selected && 'bg-slate-500 hover:bg-slate-500'
        )
          " :style="{ gridColumn: `span ${colSpans[item] ?? 1} / span ${colSpans[item] ?? 1}` }"
          @click="handleSelect(item)">
          {{ item }}
        </div>
      </div>
    </section>
  </div>
</template>
