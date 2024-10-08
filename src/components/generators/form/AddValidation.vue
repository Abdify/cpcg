<template>
    <div class="flex items-center gap-5 flex-wrap">
        <div v-for="type in types" class="p-3 border rounded-lg">{{ type.label }}</div>
    </div>
    <div class="flex items-center gap-5 flex-wrap">
        <div v-for="option in numberTypeOptions" class="p-3 border rounded-lg">{{ option.label }}</div>
    </div>
</template>

<script lang="ts" setup>
const types = [
    { label: 'number', value: 'number()' },
    { label: 'string', value: 'string()' },
    { label: 'boolean', value: 'boolean()' },
    { label: 'array', value: '[]' },
    { label: 'object', value: '({})' },
]

const numberTypeOptions = [
    { label: 'min', value: 'min()' },
    { label: 'max', value: 'max()' },
    { label: 'lt', value: 'lt()' },
    { label: 'lte', value: 'lte()' },
    { label: 'gt', value: 'gt()' },
    { label: 'gte', value: 'gte()' },
]

const stringTypeOptions = [
    { label: 'length', value: 'length()' },
    { label: 'includes', value: 'includes()' },
    { label: 'endsWith', value: 'endsWith()' },
    { label: 'min', value: 'min()' },
    { label: 'max', value: 'max()' },
    { label: 'email', value: 'email()' }
]
</script>