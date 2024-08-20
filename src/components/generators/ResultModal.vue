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
const vueFiles = ref()
const reactFiles = ref()

const handleGenerate = () => {
  const code = props.onGenerate()
  vueFiles.value = code.vueFiles
  reactFiles.value = code.reactFiles
}

// const handleCopy = () => {
//   const texts = {
//     vue: vueFiles.value,
//     react: reactFiles.value
//   }
//   navigator.clipboard.writeText(texts[openedTab.value]).catch((e) => console.error(e))
// }
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
            <!-- <AlertDialogTitle>Here is your Vue.js code</AlertDialogTitle> -->
            <AlertDialogDescription class="h-[80vh] overflow-y-scroll thin-scrollbar pr-3 mb-3">
              <TabsContent value="vue" class="grid gap-5">
                <Editor v-for="file in vueFiles" :code="file.content" :key="file.name" />
              </TabsContent>
              <TabsContent value="react" class="grid gap-5">
                <Editor v-for="file in reactFiles" :code="file.content" :key="file.name" />
              </TabsContent>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel> Close </AlertDialogCancel>
            <!-- <Button>
              <AlertDialogAction>
                <Button @click="handleCopy"> <Clipboard class="size-4 mr-1" /> Copy </Button>
              </AlertDialogAction>
            </Button> -->
          </AlertDialogFooter>
        </Tabs>
      </AlertDialogContent>
    </AlertDialogTrigger>
  </AlertDialog>
</template>
