<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ref } from 'vue'
import Editor from './Editor.vue'
import type { FileType } from '@/types'
import { Icon } from '@iconify/vue'

defineProps<{
  vueFiles?: FileType[],
  reactFiles?: FileType[]
}>()

const openedTab = ref<'react' | 'vue' | 'solid'>('vue')

</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>
      <slot></slot>

      <AlertDialogContent class="max-w-[95vw] w-fit">
        <Tabs default-value="vue" v-model="openedTab">
          <AlertDialogHeader>
            <TabsList>
              <TabsTrigger value="vue" class="w-full flex items-center gap-1">
                <Icon icon="simple-icons:vuedotjs" /> Vue.js
              </TabsTrigger>
              <TabsTrigger value="react" class="w-full flex items-center gap-1">
                <Icon icon="simple-icons:react" /> React.js
              </TabsTrigger>
              <TabsTrigger value="solid" class="w-full flex items-center gap-1">
                <Icon icon="simple-icons:solid" /> Solid.js
              </TabsTrigger>
            </TabsList>

            <AlertDialogDescription class="h-[80vh] overflow-y-scroll thin-scrollbar pr-3 mb-3">
              <TabsContent value="vue" class="grid gap-5">
                <div v-for="file in vueFiles?.filter(file => file.content)">
                  <h2 class="text-xl font-bold">{{ file.filename }}</h2>
                  <div v-if="file.commands?.length" class="grid gap-1 mb-2 bg-slate-900 rounded-lg text-slate-400 p-2">
                    <pre v-for="command in file.commands">{{ command }}</pre>
                  </div>
                  <Editor :code="file.content" :key="file.filename" :language="file.language" />
                </div>
              </TabsContent>
              <TabsContent value="react" class="grid gap-5">
                <div v-for="file in reactFiles?.filter(file => file.content)">
                  <h2 class="text-xl font-bold">{{ file.filename }}</h2>
                  <div v-if="file.commands?.length" class="grid gap-1 mb-2 bg-slate-900 rounded-lg text-slate-400 p-2">
                    <pre v-for="command in file.commands">{{ command }}</pre>
                  </div>
                  <Editor :code="file.content" :key="file.filename" :language="file.language" />
                </div>
                <!-- <Editor v-for="file in reactFiles" :code="file.content" :key="file.filename" /> -->
              </TabsContent>
              <TabsContent value="solid" class="grid gap-5">
              </TabsContent>
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel> Close </AlertDialogCancel>
          </AlertDialogFooter>
        </Tabs>
      </AlertDialogContent>
    </AlertDialogTrigger>
  </AlertDialog>
</template>
