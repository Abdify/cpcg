import type { FileType, FormSchemaType } from '@/types'

const generateFormCode = (formSchema: FormSchemaType) => {
  return {
    vueFiles: generateVueCode(formSchema),
    reactFiles: generateReactCode(formSchema)
  }
}

const generateVueCode = (formSchema: FormSchemaType) => {
  let formCode = `
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
    formCode += `
    <div class="grid gap-2 grid-cols-${row.length}">`
    row.forEach((field) => {
      formCode += `   
      <div class="grid gap-1">
        <Label for="${field.name}">${field.label}</Label>
        <${inputComponent[field.as]} type="${field.type}" name="${field.name}" id="${field.name}" />
      </div>
    `
    })
    formCode += `</div>
  `
  })

  formCode += `
  
    <Button>Submit</Button>
  </form>
  \</template\>
`
  const files: FileType[] = [
    {
      filename: 'Form.vue',
      content: formCode
    }
  ]

  return files
}

const generateReactCode = (formSchema: FormSchemaType) => {
  let formCode = `
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const GeneratedForm = () => {
  return (
    <form className="grid gap-5 max-w-3xl mx-auto my-5>
`

  formSchema.rows.forEach((row) => {
    formCode += `
      <div className="grid gap-2 grid-cols-${row.length}">`

    row.forEach((field) => {
      formCode += `
        <div className="grid gap-1">
          <Label htmlFor="${field.name}">${field.label}</Label>
          <Input type="${field.type}" name="${field.name}" id="${field.name}" />
        </div>
      `
    })
  })

  formCode += `</div>`

  formCode += `
        <Button>Submit</Button>
    </form>
    );
}`

  const files = [
    {
      filename: 'Form.tsx',
      content: formCode
    }
  ]

  return files
}

export default generateFormCode
