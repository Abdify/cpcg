<template>
  <div>
    <div class="tabs">
      <button
        v-for="(file, index) in files"
        :key="index"
        :class="{ active: state.currentFileIndex === index }"
        @click="selectFile(index)"
      >
        {{ file.name }}
      </button>
    </div>

    <div ref="editorContainer" class="editor-container"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, reactive } from "vue";
import * as monaco from "monaco-editor";

const props = defineProps<{
  files: { name: string; content: string }[];
  theme?: string;
  options?: MonacoEditorOptions;
}>();

type MonacoEditor = monaco.editor.IStandaloneCodeEditor
type MonacoEditorOptions = monaco.editor.IStandaloneEditorConstructionOptions
type MonacoModel = monaco.editor.ITextModel

const editorContainer = ref<HTMLDivElement | null>(null);
const editorInstance = ref<MonacoEditor | null>(null);

const state = reactive<{
  currentFileIndex: number;  // Index of the currently active file
  models: MonacoModel[];      // Monaco models for each file
}>({
  currentFileIndex: 0,  // Index of the currently active file
  models: [],           // Monaco models for each file
});

const createEditorModel = (file: { name: string; content: string }) => {
  return monaco.editor.createModel(file.content, "typescript");
};

const initializeEditor = () => {
  // Create the initial model for the first file
  const initialModel = createEditorModel(props.files[state.currentFileIndex]);

  // Create the editor instance with the initial model
  editorInstance.value = monaco.editor.create(editorContainer.value!, {
    model: initialModel,
    theme: props.theme || "vs-dark",
    ...props.options
  });

  // Initialize other models lazily to prevent freezing the UI
  for (let i = 0; i < props.files.length; i++) { 
    if (i !== state.currentFileIndex) {
      state.models[i] = createEditorModel(props.files[i]);
    }
  }
};

const selectFile = (index: number) => {
  if (index !== state.currentFileIndex) {
    state.currentFileIndex = index;

    // If the model doesn't exist yet, create it
    // if (!state.models[index]) {
    //   state.models[index] = createEditorModel(props.files[index]);
    // }

    console.log(editorInstance.value, state.models, state.models[index]);

    // Set the new model in the editor
    editorInstance.value!.setModel(state.models[index]);
  }
};

// Initialize the editor when the component is mounted
onMounted(() => {
  initializeEditor();

  // // Watch for theme changes
  // watch(
  //   () => props.theme,
  //   (newTheme) => {
  //     monaco.editor.setTheme(newTheme);
  //   }
  // );

  // // Watch for file content changes and update the model
  // watch(
  //   () => props.files,
  //   (newFiles) => {
  //     newFiles.forEach((file, index) => {
  //       if (state.models[index] && state.models[index].getValue() !== file.content) {
  //         state.models[index].setValue(file.content);
  //       }
  //     });
  //   },
  //   { deep: true }
  // );
});

// Clean up when the component is destroyed
// onBeforeUnmount(() => {
//   if (editorInstance.value) {
//     editorInstance.value.dispose();
//   }
//   state.models.forEach((model) => model.dispose());
// });
</script>

<style>
.editor-container {
  width: 100%;
  height: 90vh; /* Adjust height as needed */
}

.tabs {
  display: flex;
  background-color: #2d2d2d;
  padding: 10px;
}

.tabs button {
  background: none;
  border: none;
  color: #ccc;
  padding: 10px;
  cursor: pointer;
}

.tabs button.active {
  background-color: #1e1e1e;
  color: #fff;
}

</style>


