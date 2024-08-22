<script setup lang="ts">
import type { NavItemType } from '@/types'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger
} from '@/components/ui/menubar'
import { Search } from 'lucide-vue-next'

defineProps<{
  item: NavItemType
}>()
</script>

<template>

    <!-- Regular Link Item -->
  <div v-if="item.type === 'link'" :class="item.ui.class">
    <RouterLink :to="item.link ?? '/'" class="flex items-center gap-1">
      <div :class="cn('p-2 rounded-full', item.ui.container && 'bg-slate-400')">
        <item.ui.icon class="size-4" />
      </div>
      {{ item.ui.text }}
    </RouterLink>
  </div>
  
  <!-- Search Item -->
  <div v-else-if="item.type === 'search'" :class="cn('flex items-center border rounded-lg', item.ui.class)">
    <template v-if="item.ui.button">
      <Input :placeholder="item.ui.placeholder" class="rounded-r-none border-none" />
      <Button class="rounded-l-none border-none" variant="secondary">{{ item.ui.button }}</Button>
    </template>
    <template v-else>
      <div class="relative w-full max-w-sm items-center">
        <Input id="search" type="text" placeholder="Search..." class="pl-10" />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <Search class="size-6 text-muted-foreground" />
        </span>
      </div>
    </template>
  </div>

  <!-- Dropdown Item -->
  <div v-else-if="item.type === 'dropdown'" :class="item.ui.class">
    <Menubar class="bg-transparent border-none p-0">
      <MenubarMenu>
        <MenubarTrigger class="p-0 !bg-transparent">
          <div :class="cn('p-2 rounded-full', item.ui.container && 'bg-slate-400')">
            <item.ui.icon class="size-4" />
          </div>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem v-for="subItem in item.items">
            {{ subItem.ui.text }} <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem> Print... <MenubarShortcut>⌘P</MenubarShortcut> </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>
</template>
