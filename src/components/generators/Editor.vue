<script setup lang="ts">
import type { FileType } from '@/types';
import hljs from 'highlight.js';
import CodeEditor from 'simple-code-editor';
import { ref } from 'vue';

const props = defineProps<{
  code: string;
  theme?: string;
  language?: FileType['language'];
  readOnly?: boolean;
}>()

const editorValue = ref(props.code);
</script>

<template>
  <div>
    <CodeEditor v-model="editorValue" :theme="theme ?? 'github-dark'" :languages="[language ?? ['tsx', 'tsx']]" width="100%" :read-only="true" />
  </div>
</template>



