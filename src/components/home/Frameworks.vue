<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
    <div class="my-24">
        <h2 class="text-center text-slate-500">Generate components for your favorite framework to copy-paste</h2>
        <div class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">
            <div class="flex items-center gap-3 animate-pulse tech-icon">
                <Icon class="h-12 w-12 md:h-14" icon="simple-icons:vuedotjs" />
                <span class="text-xl text-slate-400 font-extrabold italic">Vue.js</span>
            </div>
            <div class="flex items-center gap-3 animate-pulse tech-icon">
                <Icon class="h-12 w-12 md:h-14" icon="simple-icons:react" />
                <span class="text-xl text-slate-400 font-extrabold italic">React.js</span>
            </div>
            <div class="flex items-center gap-3 animate-pulse tech-icon">
                <Icon class="h-12 w-12 md:h-14" icon="simple-icons:solid" />
                <span class="text-xl text-slate-400 font-extrabold italic">Solid.js</span>
            </div>
            <div class="flex items-center gap-3 animate-pulse tech-icon">
                <Icon class="h-12 w-12 md:h-14" icon="simple-icons:angular" />
                <span class="text-xl text-slate-400 font-extrabold italic">Angular.js</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tech-icon {
    animation-duration: 4s;
}

.tech-icon:nth-child(2n+1) {
    animation-delay: 2.5s;
}
</style>