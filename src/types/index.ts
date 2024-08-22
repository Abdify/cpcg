import type { Home } from 'lucide-vue-next'

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

export type NavItemType = {
  type: 'link' | 'dropdown' | 'search'
  link?: string
  ui: {
    icon?: typeof Home
    container?: boolean
    class?: string
    text?: string
    placeholder?: string
    button?: string
  }
  items?: NavItemType[]
}

export type NavColumnType = {
  items: NavItemType[]
  class?: string
}
export type NavSchemaType = {
  columns: NavColumnType[]
  class?: string
}
