<script setup lang="ts">
import type { NavSchemaType } from '@/types';
import NavGeneratorPreviewItem from './NavGeneratorPreviewItem.vue';
import { cn } from '@/lib/utils';

defineProps<{
    schema: NavSchemaType
}>()
</script>
<template>
    <div :class="cn('w-full py-2 px-5 flex items-center justify-between shadow-md rounded', schema.class)">
        <div v-for="( column, i ) in schema.columns" :key="i" :class="cn('flex items-center gap-3', column.class)">
            <div v-for="item in column.items" >
               <NavGeneratorPreviewItem :item="item" /> 
            </div>
        </div>
    </div>
</template>