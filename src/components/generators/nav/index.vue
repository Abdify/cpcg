<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { Button } from '@/components/ui/button'
import { ChevronsUpDown, PlaneTakeoff, PlusCircle } from 'lucide-vue-next'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import type { InputGeneratorType, FormSchemaType, FileType } from '@/types'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import FormPresets from '@/components/generators/form/FormPresets.vue'
import { getInputDefaultValue, formSchemaDefaultValue } from './form-data'
import generateFormCode from './generate-code'
import { SkeletonCard } from '@/components/ui/skeleton'

const ResultModal = defineAsyncComponent({
  loader: () => import('../ResultModal.vue'),
  loadingComponent: SkeletonCard
})

const formSchema = ref<FormSchemaType>(formSchemaDefaultValue)

const jsonError = ref('')

const input = ref<InputGeneratorType>(getInputDefaultValue(formSchema.value))

const handleAddInput = (e: Event) => {
  e.preventDefault()
  jsonError.value = ''

  const { position, ...rest } = input.value
  const row = formSchema.value.rows[position.row - 1]
  if (row) {
    if (position.column > row.length + 1) {
      return alert('Invalid column')
    }
    row[position.column - 1] = rest
  } else {
    formSchema.value.rows.push([rest])
  }

  input.value = getInputDefaultValue(formSchema.value)
}

const handleRemoveInput = (position: { row: number; column: number }) => {
  const row = formSchema.value.rows[position.row - 1]
  if (row && row[position.column - 1]) {
    row.splice(position.column - 1, 1)
  }
}

const handleJsonBlur = (event: Event) => {
  try {
    formSchema.value = JSON.parse((event.target as HTMLTextAreaElement).value)
  } catch (error) {
    jsonError.value = (error as Error).message
  }
}

const vueFiles = ref<FileType[]>()
const reactFiles = ref<FileType[]>()

const handleGenerate = () => {
  const code = generateFormCode(formSchema.value)
  vueFiles.value = code.vueFiles
  reactFiles.value = code.reactFiles
}
</script>

<template>
  <div class="flex gap-5 items-start">
    <section class="h-full w-96 shadow p-5 grid gap-5">
      <h3 class="font-bold">Insert An Input</h3>
      <form class="grid gap-2" @submit="handleAddInput">
        <Label class="font-semibold">Input Type</Label>
        <RadioGroup default-value="text" v-model="input.type">
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="type-text" value="text" />
            <Label for="type-text">Text</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="type-email" value="email" />
            <Label for="type-email">Email</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="type-password" value="password" />
            <Label for="type-password">Password</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="type-radio" value="radio" />
            <Label for="type-radio">Radio</Label>
          </div>
        </RadioGroup>

        <hr />

        <Label class="font-semibold">Input As</Label>
        <RadioGroup default-value="input" v-model="input.as">
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="as-input" value="input" />
            <Label for="as-input">Input</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="as-textarea" value="textarea" :disabled="input.type !== 'text'" />
            <Label for="as-textarea">Textarea</Label>
          </div>
        </RadioGroup>

        <hr />

        <Label class="font-semibold">Meta Data</Label>
        <Input placeholder="Name" v-model="input.name" required />
        <Input placeholder="Label" v-model="input.label" />
        <Input placeholder="Placeholder" v-model="input.placeholder" />

        <hr />

        <Label class="font-semibold">Position</Label>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <Label>Row</Label>
            <Input class="ml-auto" placeholder="Row" v-model="input.position.row" />
          </div>
          <div>
            <Label>Column</Label>
            <Input class="ml-auto" placeholder="Column" v-model="input.position.column" />
          </div>
        </div>

        <Button variant="outline"> <PlusCircle class="size-4 mr-1" /> Add Input </Button>
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
          <textarea
            class="h-[600px] w-full"
            :value="JSON.stringify(formSchema, null, 4)"
            @blur="handleJsonBlur"
          ></textarea>
          <p class="text-red-500">{{ jsonError }}</p>
        </CollapsibleContent>
      </Collapsible>

      <hr class="mt-5" />

      <ResultModal :vue-files="vueFiles" :react-files="reactFiles">
        <Button @click="handleGenerate"> <PlaneTakeoff class="w-4 h-4 mr-2" /> Generate </Button>
      </ResultModal>
    </section>

    <section class="w-full">
      <DynamicForm :schema="formSchema" :remove-field="handleRemoveInput" />
    </section>
  </div>

  <hr class="mt-5" />

  <FormPresets />
</template>