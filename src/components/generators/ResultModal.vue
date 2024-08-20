<script setup lang="ts">
import { PlaneTakeoff, Clipboard } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

import {
  AlertDialog,
  AlertDialogAction,
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

const props = defineProps<{
  onGenerate: () => { vueFiles: FileType[]; reactFiles: FileType[] }
}>()

const openedTab = ref<'react' | 'vue'>('vue')
const vueFiles = ref<FileType[]>()
const reactFiles = ref<FileType[]>()

const handleGenerate = () => {
  const code = props.onGenerate()
  vueFiles.value = code.vueFiles
  reactFiles.value = code.reactFiles
}
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>
      <Button @click="handleGenerate"> <PlaneTakeoff class="w-4 h-4 mr-2" /> Generate </Button>

      <AlertDialogContent class="max-w-[95vw] w-fit">
        <Tabs default-value="vue" v-model="openedTab">
          <AlertDialogHeader>
            <TabsList>
              <TabsTrigger value="vue" class="w-full"> Vue.js </TabsTrigger>
              <TabsTrigger value="react" class="w-full"> React.js </TabsTrigger>
            </TabsList>
            <AlertDialogDescription class="h-[80vh] overflow-y-scroll thin-scrollbar pr-3 mb-3">
              <TabsContent value="vue" class="grid gap-5">
                <div v-for="file in vueFiles?.filter(file => file.content)">
                  <h2 class="text-xl font-bold">{{ file.filename }}</h2>
                  <div  v-if="file.commands?.length"  class="grid gap-1 mb-2 bg-slate-900 rounded-lg text-slate-400 p-2">
                    <pre v-for="command in file.commands">{{ command }}</pre>
                  </div>
                  <Editor :code="file.content" :key="file.filename" :language="file.language" />
                </div>
              </TabsContent>
              <TabsContent value="react" class="grid gap-5">
                <div v-for="file in reactFiles?.filter(file => file.content)">
                  <h2 class="text-xl font-bold">{{ file.filename }}</h2>
                  <div  v-if="file.commands?.length"  class="grid gap-1 mb-2 bg-slate-900 rounded-lg text-slate-400 p-2">
                    <pre v-for="command in file.commands">{{ command }}</pre>
                  </div>
                  <Editor :code="file.content" :key="file.filename" :language="file.language" />
                </div>
                <!-- <Editor v-for="file in reactFiles" :code="file.content" :key="file.filename" /> -->
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
