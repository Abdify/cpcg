import type { FormSchemaType } from '@/types'

const generateFormCode = (formSchema: FormSchemaType) => {
  let vueCode = `
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
    vueCode += `
    <div class="grid gap-2 grid-cols-${row.length}">`
    row.forEach((field) => {
      vueCode += `   
      <div class="grid gap-1">
        <Label for="${field.name}">${field.label}</Label>
        <${inputComponent[field.as]} type="${field.type}" name="${field.name}" id="${field.name}" />
      </div>
    `
    })
    vueCode += `</div>
  `
  })

  vueCode += `
  
    <Button>Submit</Button>
  </form>
  \</template\>
`

  let reactCode = `
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const GeneratedForm = () => {
  return (
    <form className="grid gap-5 max-w-3xl mx-auto my-5>
`

  formSchema.rows.forEach((row) => {
    reactCode += `
      <div className="grid gap-2 grid-cols-${row.length}">`

    row.forEach((field) => {
      reactCode += `
        <div className="grid gap-1">
          <Label htmlFor="${field.name}">${field.label}</Label>
          <Input type="${field.type}" name="${field.name}" id="${field.name}" />
        </div>
      `
    })
  })

  reactCode += `</div>`

  reactCode += `
        <Button>Submit</Button>
    </form>
    );
}`

  return {
    vueCode,
    reactCode
  }
}

export default generateFormCode
