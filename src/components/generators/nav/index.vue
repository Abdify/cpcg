<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { Button } from '@/components/ui/button'
import { ChevronsUpDown, Columns, PlaneTakeoff, PlusCircle } from 'lucide-vue-next'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import type { FileType, NavSchemaType, NavItemType, NavColumnType } from '@/types'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { getInputDefaultValue, getNavInputDefaultValue, navSchemaDefaultValue } from './form-data'
import generateFormCode from './generate-code'
import { SkeletonCard } from '@/components/ui/skeleton'
import NavGeneratorPreview from './NavGeneratorPreview.vue'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Switch } from '@/components/ui/switch'

const ResultModal = defineAsyncComponent({
  loader: () => import('../ResultModal.vue'),
  loadingComponent: SkeletonCard
})

const navSchema = ref<NavSchemaType>(navSchemaDefaultValue)

const jsonError = ref('')

const input = ref<NavItemType>(getNavInputDefaultValue())

// const handleAddInput = (e: Event) => {
//   e.preventDefault()
//   jsonError.value = ''

//   const { position, ...rest } = input.value
//   const row = navSchema.value.rows[position.row - 1]
//   if (row) {
//     if (position.column > row.length + 1) {
//       return alert('Invalid column')
//     }
//     row[position.column - 1] = rest
//   } else {
//     navSchema.value.rows.push([rest])
//   }

//   input.value = getInputDefaultValue(navSchema.value)
// }

// const handleRemoveInput = (position: { row: number; column: number }) => {
//   const row = navSchema.value.rows[position.row - 1]
//   if (row && row[position.column - 1]) {
//     row.splice(position.column - 1, 1)
//   }
// }

const handleJsonBlur = (event: Event) => {
  try {
    navSchema.value = JSON.parse((event.target as HTMLTextAreaElement).value)
  } catch (error) {
    jsonError.value = (error as Error).message
  }
}

const vueFiles = ref<FileType[]>()
const reactFiles = ref<FileType[]>()

const handleGenerate = () => {
  // const code = generateFormCode(navSchema.value)
  // vueFiles.value = code.vueFiles
  // reactFiles.value = code.reactFiles
}

const handleAddColumn = () => {
  navSchema.value.columns.push({
    items: [],
  })
}

const selectedColumn = ref<NavColumnType | undefined>()
const handleColumnClick = (index: number) => {
  selectedColumn.value = navSchema.value.columns[index]
}
</script>

<template>
  <div class="flex gap-5 items-start">
    <ResizablePanelGroup direction="horizontal">

      <ResizablePanel :default-size="20" :min-size="10">
        <section class="h-full p-5 grid gap-5">

          <Drawer>
            <div class="grid grid-cols-2 gap-2">
              <h1 class="col-span-2 font-bold">Columns</h1>
              <DrawerTrigger v-for="(column, i) in navSchema.columns" as-child>
                <Button variant="outline" type="button" @click="handleColumnClick(i)">
                  <Columns class="size-4 mr-1" /> {{ i + 1 }} ({{ column.items.length }} Items)
                </Button>
              </DrawerTrigger>

            </div>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Edit Column</DrawerTitle>
                <DrawerDescription>
                  <form v-if="selectedColumn" class="grid gap-5">
                    <div v-for="(item, i) in selectedColumn.items" class="border border-dashed p-2 rounded-lg">
                      <h1 class="font-bold mb-2 text-lg">Item {{ i + 1 }}</h1>
                      <div class="flex items-center gap-2">
                        <RadioGroup v-model="item.type">
                          <div class="flex items-center space-x-2">
                            <RadioGroupItem id="type-link" value="link" />
                            <Label for="type-link">Link</Label>
                          </div>
                          <div class="flex items-center space-x-2">
                            <RadioGroupItem id="type-dropdown" value="dropdown" />
                            <Label for="type-dropdown">Dropdown</Label>
                          </div>
                          <div class="flex items-center space-x-2">
                            <RadioGroupItem id="type-search" value="search" />
                            <Label for="type-search">Search</Label>
                          </div>
                        </RadioGroup>

                        <div>
                          <Label>Link</Label>
                          <Input v-model="item.link" />
                        </div>
                        <div>
                          <Label>Icon</Label>
                          <Input v-model="item.ui.icon" />
                        </div>
                        <div>
                          <Label>Text</Label>
                          <Input v-model="item.ui.text" />
                        </div>
                        <div>
                          <Label>Class</Label>
                          <Input v-model="item.ui.class" />
                        </div>
                        <div v-if="item.type === 'search'">
                          <Label>Placeholder</Label>
                          <Input v-model="item.ui.placeholder" />
                        </div>
                        <div v-if="item.type === 'search'">
                          <Label>Button</Label>
                          <Input v-model="item.ui.button" />
                        </div>
                        <div v-if="item.type !== 'search'" class="grid gap-1">
                          <Label :for="i + 'switch'">Show Container?</Label>
                          <Switch :id="i + 'switch'" v-model:checked="item.ui.container"
                            :default-checked="item.ui.container" />
                        </div>
                        <!-- <Button type="submit" @click="handleAddInput">Add</Button>
                        <Button variant="outline" @click="handleRemoveInput(input.position)">Remove</Button> -->

                      </div>

                    </div>
                  </form>
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <!-- <Button>Submit</Button> -->
                <DrawerClose as-child>
                  <Button variant="outline" class="w-fit">
                    Close
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>


          <Button variant="outline" type="button" @click="handleAddColumn">
            <PlusCircle class="size-4 mr-1" /> Add Column
          </Button>
          <form class="grid gap-2">
            <!-- <Input  /> -->
          </form>

          <hr />

          <Collapsible>
            <div class="flex items-center justify-between space-x-4 px-4">
              <h4 class="text-sm font-semibold">Edit as JSON?</h4>
              <CollapsibleTrigger as-child>
                <Button variant="ghost" size="sm" class="w-9 p-0">
                  <ChevronsUpDown class="h-4 w-4" />
                  <span class="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <textarea class="h-[600px] w-full" :value="JSON.stringify(navSchema, null, 4)"
                @blur="handleJsonBlur"></textarea>
              <p class="text-red-500">{{ jsonError }}</p>
            </CollapsibleContent>
          </Collapsible>

          <hr class="mt-5" />

          <ResultModal :vue-files="vueFiles" :react-files="reactFiles">
            <Button @click="handleGenerate">
              <PlaneTakeoff class="w-4 h-4 mr-2" /> Generate
            </Button>
          </ResultModal>
        </section>
      </ResizablePanel>


      <ResizableHandle with-handle />

      <ResizablePanel>
        <section class="w-full px-5">
          <NavGeneratorPreview :schema="navSchema" />
        </section>
      </ResizablePanel>

    </ResizablePanelGroup>
  </div>

  <hr class="mt-5" />

</template>