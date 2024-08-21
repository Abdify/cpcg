<script setup lang="ts">
import { ref } from 'vue'
import { PlaneTakeoff } from 'lucide-vue-next'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import type { RouterLink } from 'vue-router';

const open = ref(false)

const toggle = () => {
  open.value = !open.value
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Grid Layout',
    href: '/generators/grid',
    description: 'Create complex grid layout in Vue.js and React.js without writing any code!'
  },
  {
    title: 'Form Generator',
    href: '/generators/form',
    description:
      'Create complex and beautiful forms in Vue.js and React.js without writing any code!'
  },
  {
    title: 'Nav Generator',
    href: '/generators/nav',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.'
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
  }
]
</script>
<template>
  <div class="font-sans antialiased bg-teal-500">
    <nav class="container flex items-center justify-between flex-wrap px-6 py-3 gap-10">
      <RouterLink to="/" class="text-white">
        <div class="flex items-center gap-1">
          <PlaneTakeoff />
          <h1 class="font-semibold text-xl tracking-tight">CPCG</h1>
        </div>
        <span class="text-muted text-sm">Cross Platform Component Generator</span>
      </RouterLink>
      <div class="block sm:hidden">
        <button @click="toggle"
          class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div :class="open ? 'block' : 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto text-white">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger class="bg-transparent hover:bg-transparent">Getting Started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
                  <li class="row-span-3">
                    <NavigationMenuLink as-child>
                      <RouterLink
                        class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        to="/">
                        <PlaneTakeoff />
                        <div class="mb-2 mt-4 text-lg font-medium">Component Generator</div>
                        <p class="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Tailwind CSS.
                        </p>
                      </RouterLink>
                    </NavigationMenuLink>
                  </li>

                  <li>
                    <NavigationMenuLink as-child>
                      <a href="/docs"
                        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div class="text-sm font-medium leading-none">Introduction</div>
                        <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Re-usable components built using Radix UI and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink as-child>
                      <a href="/docs/installation"
                        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div class="text-sm font-medium leading-none">Installation</div>
                        <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          How to install dependencies and structure your app.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink as-child>
                      <a href="/docs/primitives/typography"
                        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div class="text-sm font-medium leading-none">Typography</div>
                        <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Styles for headings, paragraphs, lists...etc
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger class="bg-transparent hover:bg-transparent">Generators</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li v-for="component in components" :key="component.title">
                    <NavigationMenuLink as-child>
                      <RouterLink :to="component.href"
                        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div class="text-sm font-medium leading-none">{{ component.title }}</div>
                        <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {{ component.description }}
                        </p>
                      </RouterLink>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <!-- <NavigationMenuItem>
              <NavigationMenuLink href="/docs" :class="navigationMenuTriggerStyle()">
                Documentation
              </NavigationMenuLink>
            </NavigationMenuItem> -->
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  </div>
</template>
