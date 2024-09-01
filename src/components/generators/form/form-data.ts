import type { FormSchemaType, SchemaInputType } from '@/types'

export const getInputDefaultValue = (
  formSchema: FormSchemaType
): SchemaInputType & {
  position: {
    row: number
    column: number
  }
} => ({
  label: '',
  name: '',
  as: 'input',
  type: 'text',
  placeholder: '',
  position: {
    row: formSchema.rows.length + 1,
    column: 1
  }
})

export const formSchemaDefaultValue: FormSchemaType = {
  title: 'Signup',
  description: 'Please fill out this form to create a new account.',
  buttonText: 'Sign Up',
  rows: [
    [
      {
        label: 'Your Name',
        name: 'name',
        as: 'input',
        type: 'text'
      }
    ],
    [
      {
        label: 'Your Email',
        name: 'email',
        as: 'input',
        type: 'email'
      }
    ],
    [
      {
        label: 'Your Password',
        name: 'password',
        as: 'input',
        type: 'password'
      },
      {
        label: 'Confirm Password',
        name: 'confirmPassword',
        as: 'input',
        type: 'password'
      }
    ]
  ]
}
