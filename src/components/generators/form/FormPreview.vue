<template>
  <form class="max-w-3xl space-y-5 mx-auto" @submit="onSubmit">
    <div>
      <h1 class="text-3xl font-bold text-gray-800">{{ schema.title }}</h1>
      <p class="text-gray-600">{{ schema.description }}</p>
    </div>
    <div v-for="(row, i) in schema.rows" :key="i" class="grid gap-2"
      :style="{ gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))` }">

      <div v-for="(field, j) in row">
        <ContextMenu>
          <ContextMenuTrigger>
            <FormField :validate-on-blur="false" v-if="field.type !== 'checkbox'" v-slot="{ componentField }"
              :name="field.name">
              <FormItem>
                <FormLabel>{{ field.label }}</FormLabel>
                <FormControl>
                  <Input :type="field.type" :placeholder="field.placeholder" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField :validate-on-blur="false" v-else v-slot="{ value, handleChange }" type="checkbox"
              :name="field.name">
              <FormItem class="flex flex-row items-start gap-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox :checked="value" @update:checked="handleChange" />
                </FormControl>
                <div class="space-y-1 leading-none">
                  <FormLabel>{{ field.label }}</FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            </FormField>
          </ContextMenuTrigger>

          <ContextMenuContent>
            <ContextMenuItem inset @select="editField({ row: i + 1, column: j + 1 })">
              Edit
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem inset @select="removeField({ row: i + 1, column: j + 1 })" class="text-red-500">Remove
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    </div>
    <Button type="submit">
      Submit
    </Button>
  </form>



  <!-- <Form class="grid gap-5 max-w-3xl border mx-auto border-none my-5">
    <div>
      <h1 class="text-3xl font-bold text-gray-800">{{ schema.title }}</h1>
      <p class="text-gray-600">{{ schema.description }}</p>
    </div>
    <div v-for="(row, i) in schema.rows" :key="i" class="grid gap-2"
      :style="{ gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))` }">

      <div v-for="(field, j) in row">
        <ContextMenu>
          <ContextMenuTrigger>
            <div v-if="field.type !== 'radio' && field.type !== 'checkbox'" class="grid gap-1">
              <label :for="field.name">{{ field.label }}</label>
              <Field :as="field.as" :id="field.name" :name="field.name" :type="field.type"
                :placeholder="field.placeholder" class="border rounded-md p-2" />
            </div>
            <div v-else class="flex items-center gap-1">
              <Field :as="field.as" :id="field.name" :name="field.name" :type="field.type"
                class="border rounded-md p-2" />
              <label :for="field.name">{{ field.label }}</label>
            </div>


          </ContextMenuTrigger>

          <ContextMenuContent>
            <ContextMenuItem inset @select="editField({ row: i + 1, column: j + 1 })">
              Edit
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem inset @select="removeField({ row: i + 1, column: j + 1 })" class="text-red-500">Remove
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>


    </div>
    <Button type="button">{{ schema.buttonText }}</Button>
  </Form> -->
</template>
<script setup lang="ts">
import { Form, Field, useForm } from 'vee-validate'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import type { FormSchemaType } from '@/types';

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { z } from 'zod';
import { toTypedSchema } from '@vee-validate/zod';

defineProps<{
  schema: FormSchemaType
  removeField: (position: { row: number; column: number }) => void
  editField: (position: { row: number; column: number }) => void
}>()

const formSchema = toTypedSchema(z.object({
  name: z.string().min(2).max(50),
  // email: z.string().email('Email is required'),
  password: z.string().min(8).max(50),
  phone: z.number().optional(),
  // address: z.object({
  //   street: z.string().min(2).max(50),
  //   city: z.string().min(2).max(50),
  //   state: z.string().min(2).max(50),
  //   zipCode: z.string().min(5).max(5),
  // }),
}))

const { handleSubmit, } = useForm({
  validationSchema: formSchema,
})


const onSubmit = handleSubmit((values) => {
  // Submit form data
  console.log(values)
})
</script>
