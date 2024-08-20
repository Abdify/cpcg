declare module 'simple-code-editor' {
  import { DefineComponent } from 'vue'

  const SimpleCodeEditor: DefineComponent<{
    modelValue: string
    lang?: string
    theme?: string
    readOnly?: boolean
    wrap?: boolean
  }>

  export default SimpleCodeEditor
}
