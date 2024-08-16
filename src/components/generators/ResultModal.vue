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

const props = defineProps<{
  onGenerate: () => ({ vueCode: string, reactCode: string })
}>()

const openedTab = ref<'react' | 'vue'>('vue')
const vueCode = ref('')
const reactCode = ref('')


const handleGenerate = () => {
  const code = props.onGenerate();
  vueCode.value = code.vueCode
  reactCode.value = code.reactCode
}

const handleCopy = () => {
  const texts = {
    vue: vueCode.value,
    react: reactCode.value
  }
  navigator.clipboard.writeText(texts[openedTab.value]).catch((e) => console.error(e))
}
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>
      <Button @click="handleGenerate">
        <PlaneTakeoff class="w-4 h-4 mr-2" /> Generate
      </Button>

      <AlertDialogContent class="max-w-[95vw] w-fit">
        <Tabs default-value="vue" v-model="openedTab">
          <AlertDialogHeader>
            <TabsList>
              <TabsTrigger value="vue" class="w-full"> Vue.js </TabsTrigger>
              <TabsTrigger value="react" class="w-full"> React.js </TabsTrigger>
            </TabsList>
            <!-- <AlertDialogTitle>Here is your Vue.js code</AlertDialogTitle> -->
            <AlertDialogDescription class="h-[80vh] overflow-y-scroll thin-scrollbar pr-3">
              <TabsContent value="vue">
                <pre class="text-green-600">
                    {{ vueCode }}
                </pre>
              </TabsContent>
              <TabsContent value="react">
                <pre class="text-green-600">
                    {{ reactCode }}
                </pre>
              </TabsContent>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel> Close </AlertDialogCancel>
            <Button>
              <AlertDialogAction>
                <Button @click="handleCopy">
                  <Clipboard class="size-4 mr-1" /> Copy
                </Button>
              </AlertDialogAction>
            </Button>
          </AlertDialogFooter>
        </Tabs>
      </AlertDialogContent>
    </AlertDialogTrigger>
  </AlertDialog>
</template>
