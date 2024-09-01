<template>
  <Form class="grid gap-5 max-w-3xl border mx-auto border-none my-5">
    <div>
      <h1 class="text-3xl font-bold text-gray-800">{{ schema.title }}</h1>
      <p class="text-gray-600">{{ schema.description }}</p>
    </div>
    <div v-for="(row, i) in schema.rows" :key="i" class="grid gap-2"
      :style="{ gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))` }">

      <div v-for="(field, j) in row">
        <ContextMenu>
          <ContextMenuTrigger>
            <div v-if="field.type !== 'radio'" class="grid gap-1">
              <label :for="field.name">{{ field.label }}</label>
              <Field :as="field.as" :id="field.name" :name="field.name" :type="field.type"
                class="border rounded-md p-2" />
            </div>
            <div v-else class="flex items-center gap-1">
              <Field :as="field.as" :id="field.name" :name="field.name" :type="field.type"
                class="border rounded-md p-2" />
              <label :for="field.name">{{ field.label }}</label>
            </div>


          </ContextMenuTrigger>

          <ContextMenuContent>
            <ContextMenuItem inset @select="removeField({ row: i + 1, column: j + 1 })">Remove</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem inset disabled>Edit</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>


    </div>
    <Button type="button">{{ schema.buttonText }}</Button>
  </Form>
</template>
<script setup lang="ts">
import { Form, Field } from 'vee-validate'
import { Button } from '@/components/ui/button'
import type { FormSchemaType } from '@/types';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

defineProps<{
  schema: FormSchemaType
  removeField: (position: { row: number; column: number }) => void
}>()
</script>
