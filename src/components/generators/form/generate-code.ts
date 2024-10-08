import type { FileType, FormSchemaType } from '@/types'

const inputComponent = {
  input: 'Input',
  textarea: 'Textarea',
  radio: 'input',
  checkbox: 'input'
}

const generateFormCode = (formSchema: FormSchemaType) => {
  return {
    vueFiles: generateVueCode(formSchema),
    reactFiles: generateReactCode(formSchema)
  }
}

const generateVueCode = (formSchema: FormSchemaType) => {
  let generatedFormCode = `
  \<script setup lan="ts"\>
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Button } from '@/components/ui/button';
    import { Textarea } from '@/components/ui/textarea';
  \</script\>

\<template\>
<form class="grid gap-5 min-w-96 max-w-3xl mx-auto my-5">
  <div>
    <h1 class="text-3xl font-bold text-gray-800">${formSchema.title}</h1>
    <p class="text-gray-600">${formSchema.description}</p>
  </div>
`

  formSchema.rows.forEach((row) => {
    generatedFormCode += `
    <div class="grid gap-2 grid-cols-${row.length}">`
    row.forEach((field) => {
      if (field.type !== 'radio' && field.type !== 'checkbox') {
        generatedFormCode += `   
        <div class="grid gap-1">
          <Label for="${field.name}">${field.label}</Label>
          <${inputComponent[field.as]} type="${field.type}" name="${field.name}" id="${field.name}" placeholder="${field.placeholder ?? ''}" />
        </div>
      `
      } else {
        generatedFormCode += `
        <div className="flex items-center gap-1">
          <${inputComponent[field.as]} type="${field.type}" name="${field.name}" id="${field.name}" />
          <Label htmlFor="${field.name}">${field.label}</Label>
        </div>
      `
      }
    })
    generatedFormCode += `</div>
  `
  })

  generatedFormCode += `
    <Button>${formSchema.buttonText}</Button>
  </form>
  \</template\>
`

  const files: FileType[] = [
    {
      filename: 'GeneratedForm.vue',
      content: generatedFormCode,
      language: ['ts'],
      commands: [
        'npx shadcn-vue@latest add input',
        'npx shadcn-vue@latest add label',
        'npx shadcn-vue@latest add button',
        'npx shadcn-vue@latest add textarea'
      ]
    },
    {
      filename: 'Form.vue',
      content: '',
      language: ['tsx']
    }
  ]

  return files
}

const generateReactCode = (formSchema: FormSchemaType) => {
  let generatedFormCode = `
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const GeneratedForm = () => {
  return (
    <form className="grid gap-5 min-w-96 max-w-3xl mx-auto my-5>
      <div>
        <h1 class="text-3xl font-bold text-gray-800">${formSchema.title}</h1>
        <p class="text-gray-600">${formSchema.description}</p>
      </div>
`

  formSchema.rows.forEach((row) => {
    generatedFormCode += `
      <div className="grid gap-2 grid-cols-${row.length}">`

    row.forEach((field) => {
      if (field.type !== 'radio' && field.type !== 'checkbox') {
        generatedFormCode += `
        <div className="grid gap-1">
          <Label htmlFor="${field.name}">${field.label}</Label>
          <${inputComponent[field.as]} type="${field.type}" name="${field.name}" id="${field.name}" placeholder="${field.placeholder}" />
        </div>
      `
      } else {
        generatedFormCode += `
        <div className="flex items-center gap-1">
          <${inputComponent[field.as]} type="${field.type}" name="${field.name}" id="${field.name}" />
          <Label htmlFor="${field.name}">${field.label}</Label>
        </div>
      `
      }
    })

    generatedFormCode += `</div>`
  })

  generatedFormCode += `
  
      <Button>Submit</Button>
    </form>
    );
}`

  const files: FileType[] = [
    {
      filename: 'GeneratedForm.tsx',
      content: generatedFormCode,
      language: ['tsx'],
      commands: [
        'npx shadcn-ui@latest add input',
        'npx shadcn-ui@latest add label',
        'npx shadcn-ui@latest add button',
        'npx shadcn-ui@latest add textarea'
      ]
    }
  ]

  return files
}

export default generateFormCode
