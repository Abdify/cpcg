<script setup lang="ts">
import { Slider } from '@/components/ui/slider'
import { ref } from 'vue'
import generateGridCode from './generate-code'
import { cn } from '@/lib/utils'
import ResultModal from '../ResultModal.vue'
import { Button } from '@/components/ui/button'
import { PlaneTakeoff } from 'lucide-vue-next'
import type { FileType, GridSchemaType } from '@/types'

const selected = ref<number>()

const gridSchema = ref<GridSchemaType>({
  nItems: [6],
  nColumns: [6],
  colSpans: {},
})

const handleSelect = (selectedItem: number) => {
  if (!selected.value) return (selected.value = selectedItem)

  gridSchema.value.colSpans[selected.value] = selectedItem + 1 - selected.value
  selected.value = undefined
}

const vueFiles = ref<FileType[]>()
const reactFiles = ref<FileType[]>()

const handleGenerate = () => {
  const code = generateGridCode(gridSchema.value.nItems[0], gridSchema.value.nColumns[0], gridSchema.value.colSpans)
  vueFiles.value = code.vueFiles
  reactFiles.value = code.reactFiles
}
</script>

<template>
  <div class="flex gap-5">
    <!-- Options -->
    <section class="h-full w-96 shadow p-5 grid gap-5">
      <div>
        <p>Number of Items: {{ gridSchema.nItems }}</p>
        <Slider :default-value="[6]" :max="100" :step="1" lab v-model="gridSchema.nItems" />
      </div>

      <div>
        <p>Number of Columns: {{ gridSchema.nColumns }}</p>
        <Slider :default-value="[6]" :max="20" :step="1" lab v-model="gridSchema.nColumns" />
      </div>

      <ResultModal :vue-files="vueFiles" :react-files="reactFiles">
        <Button @click="handleGenerate">
          <PlaneTakeoff class="w-4 h-4 mr-2" /> Generate
        </Button>
      </ResultModal>
    </section>

    <!-- Result -->
    <section class="w-full">
      <div class="grid gap-5" :style="{ gridTemplateColumns: `repeat(${gridSchema.nColumns[0]}, 1fr)` }">
        <div v-for="(item, i) in gridSchema.nItems[0]" :key="item" :class="cn(
          'bg-gray-200 text-3xl rounded-lg py-8 flex items-center justify-center transition-colors hover:bg-slate-300',
          selected && '',
          item === selected && 'bg-slate-500 hover:bg-slate-500'
        )
          " :style="{ gridColumn: `span ${gridSchema.colSpans[item] ?? 1} / span ${gridSchema.colSpans[item] ?? 1}` }"
          @click="handleSelect(item)">
          {{ item }}
        </div>
      </div>
    </section>
  </div>
</template>
