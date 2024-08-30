import type { FileType } from '@/types'

const generateGridCode = (nItems: number, nColumns: number, colSpans: number[]) => {
  return {
    vueFiles: generateVueCode(nItems, nColumns, colSpans),
    reactFiles: generateReactCode(nItems, nColumns, colSpans)
  }
}

const generateVueCode = (nItems: number, nColumns: number, colSpans: number[]) => {
  const vueCode = `
<template>
    <div class="grid grid-cols-${nColumns} gap-5">
    ${Array.from({ length: nItems }, (_, i) => i + 1)
      .map(
        (i) =>
          `
      <div key="${i}" class="bg-gray-200 text-3xl rounded-lg py-8 flex items-center justify-center${colSpans[i] ? ` col-span-${colSpans[i]}` : ''}">
        ${i}
      </div>
`
      )
      .join(' ')}
    </div>
</template>
`
  const vueFiles: FileType[] = [
    {
      filename: 'GeneratedGrid.vue',
      content: vueCode,
      language: ['ts']
    }
  ]
  return vueFiles
}

const generateReactCode = (nItems: number, nColumns: number, colSpans: number[]) => {
  const reactCode = `
return (
    <div className="grid grid-cols-${nColumns} gap-5">
    ${Array.from({ length: nItems }, (_, i) => i + 1)
      .map(
        (i) =>
          `
      <div key="${i}" className="bg-gray-200 text-3xl rounded-lg py-8 flex items-center justify-center${colSpans[i] ? ` col-span-${colSpans[i]}` : ''}">
        ${i}
      </div>
`
      )
      .join(' ')}
    </div>
)
`

  const reactFiles: FileType[] = [
    {
      filename: 'GeneratedGrid.ts',
      content: reactCode,
      language: ['tsx']
    }
  ]

  return reactFiles
}

export default generateGridCode
