import type { FileType, FormSchemaType } from '@/types'

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
  \</script\>

\<template\>
<form class="grid gap-5 max-w-3xl mx-auto my-5">
`

  const inputComponent = {
    input: 'Input',
    textarea: 'textarea',
    radio: 'Input'
  }

  formSchema.rows.forEach((row) => {
    generatedFormCode += `
    <div class="grid gap-2 grid-cols-${row.length}">`
    row.forEach((field) => {
      generatedFormCode += `   
      <div class="grid gap-1">
        <Label for="${field.name}">${field.label}</Label>
        <${inputComponent[field.as]} type="${field.type}" name="${field.name}" id="${field.name}" />
      </div>
    `
    })
    generatedFormCode += `</div>
  `
  })

  generatedFormCode += `
  
    <Button>Submit</Button>
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
        'npx shadcn-vue@latest add button'
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

const GeneratedForm = () => {
  return (
    <form className="grid gap-5 max-w-3xl mx-auto my-5>
`

  formSchema.rows.forEach((row) => {
    generatedFormCode += `
      <div className="grid gap-2 grid-cols-${row.length}">`

    row.forEach((field) => {
      generatedFormCode += `
        <div className="grid gap-1">
          <Label htmlFor="${field.name}">${field.label}</Label>
          <Input type="${field.type}" name="${field.name}" id="${field.name}" />
        </div>
      `
    })
  })

  generatedFormCode += `</div>`

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
        'npx shadcn-ui@latest add button'
      ]
    }
  ]

  return files
}

export default generateFormCode
