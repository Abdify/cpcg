const generateGridCode = (nItems: number, nColumns: number, colSpans: number[]) => {
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
  return { vueCode: vueCode, reactCode: reactCode }
}

export default generateGridCode
