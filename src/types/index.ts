export type SchemaInputType = {
  label: string
  name: string
  as: 'input' | 'textarea'
  type: 'text' | 'email' | 'password' | 'radio' | 'checkbox'
  placeholder?: string
}

export type InputGeneratorType = SchemaInputType & {
  position: {
    row: number
    column: number
  }
}

export type FormSchemaType = {
  rows: SchemaInputType[][]
}

export type FileType = {
  filename: string
  content: string
  language: [string, string?]
  commands?: string[]
}
