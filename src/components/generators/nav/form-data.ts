import type { FormSchemaType, NavItemType, NavSchemaType, SchemaInputType } from '@/types'
import { AxeIcon, BluetoothOff, CopyPlus, Home, Paperclip, User } from 'lucide-vue-next'

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

export const getNavInputDefaultValue = (): NavItemType => ({
  type: 'link',
  link: '/',
  ui: {
    icon: 'mdi:home',
    container: false,
    class: 'logo'
  },
  items: []
})
export const navSchemaDefaultValue: NavSchemaType = {
  class: 'bg-slate-300',
  columns: [
    {
      items: [
        {
          type: 'link',
          link: '/',
          ui: {
            icon: 'simple-icons:zendesk',
            container: false,
            class: 'logo',
            text: 'Company Name'
          }
        }
      ]
    },
    {
      items: [
        {
          type: 'search',
          ui: {
            placeholder: 'Search...',
            button: 'Search'
          }
        }
      ]
    },
    {
      items: [
        {
          type: 'dropdown',
          ui: {
            icon: 'mdi:chevron-down',
            container: true,
            text: 'Copy'
          },
          items: [
            {
              type: 'link',
              link: '/user/profile',
              ui: {
                text: 'Pnpm'
              }
            },
            {
              type: 'link',
              link: '/user/settings',
              ui: {
                text: 'Yarn'
              }
            },
            {
              type: 'link',
              link: '/user/settings',
              ui: {
                text: 'npm'
              }
            }
          ]
        },
        {
          type: 'link',
          link: '/copy',
          ui: {
            icon: 'mdi:account',
            container: true
            // text: 'User'
          }
        },
        {
          type: 'link',
          link: '/docs',
          ui: {
            icon: 'mdi:paperclip',
            container: true
            // text: 'Docs'
          }
        },
        {
          type: 'link',
          link: '/blog',
          ui: {
            icon: 'mdi:bluetooth-off',
            container: true
            // text: 'Blog'
          }
        }
      ]
    }
  ]
}
