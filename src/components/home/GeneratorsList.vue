<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { RouterLink } from 'vue-router';

</script>

<template>
    <section class="my-20">
        <div>
            <div class="mx-auto px-6 max-w-6xl text-gray-500">
                <div class="text-center">
                    <h2 class="text-3xl text-gray-950 dark:text-white font-semibold">Amazing Generators For Your Next
                        Project!</h2>
                    <p class="mt-6 text-gray-700 dark:text-gray-300">Increase your productivity by using our optimized
                        and ready-to-use components
                    </p>
                </div>
                <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">


                    <div
                        class="relative group overflow-hidden p-5 rounded-2xl bg-white border border-dashed dark:border-dashed dark:bg-primary-950">
                        <div aria-hidden="true"
                            class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-warning-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5">
                        </div>
                        <div class="relative">
                            <div class="flex items-center gap-3">
                                <div
                                    class="border border-warning-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-xl dark:bg-gray-900 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-warning-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                                    <Icon icon="mdi:form-dropdown" />
                                </div>
                            </div>

                            <div class="mt-6 pb-6 rounded-b-xl">
                                <p class="text-gray-700 dark:text-gray-300 font-bold">Form Generator</p>
                                <p>Create complex, beautiful and optimized forms without writing any code!</p>
                            </div>

                            <div class="flex gap-3 -mb-5 py-4 border-t border-dashed">
                                <RouterLink to="/generators/form"
                                    class="group rounded-full disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                                    <span>Generate</span>
                                    <Icon icon="mdi:arrow-right" />
                                </RouterLink>
                                <a href="https://github.com/abdify/cpcg" target="_blank" rel="noopener"
                                    class="group flex items-center rounded-full disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
                                    <span class="sr-only">Source Code</span>
                                    <Icon icon="simple-icons:github" />
                                </a>
                            </div>
                        </div>
                    </div>


                    <div href="#"
                        class="relative group overflow-hidden p-5 rounded-xl bg-white border border-dashed dark:border-dashed dark:bg-primary-950">
                        <div aria-hidden="true"
                            class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-success-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5">
                        </div>
                        <div class="relative">
                            <div
                                class="border border-success-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-xl dark:bg-gray-900 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                                <Icon icon="mingcute:layout-3-fill" />
                            </div>

                            <div class="mt-6 pb-6 rounded-b-xl">
                                <p class="text-gray-700 dark:text-gray-300 font-bold">Grid Generator</p>
                                <p>Create complex grid layout in Vue.js and React.js without writing any code!</p>
                            </div>

                            <div class="flex gap-3 -mb-5 py-4 border-t border-dashed">
                                <RouterLink to="/generators/grid"
                                    class="group rounded-full disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                                    <span>Generate</span>
                                    <Icon icon="mdi:arrow-right" />
                                </RouterLink>
                                <a href="https://github.com/abdify/cpcg" target="_blank" rel="noopener"
                                    class="group flex items-center rounded-full disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
                                    <span class="sr-only">Source Code</span>
                                    <Icon icon="simple-icons:github" />
                                </a>
                            </div>
                        </div>
                    </div>


                    <div
                        class="relative group overflow-hidden p-5 rounded-xl bg-white border border-dashed dark:border-dashed dark:bg-primary-950">
                        <div aria-hidden="true"
                            class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-danger-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5">
                        </div>
                        <div class="relative">
                            <div
                                class="border border-danger-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-xl dark:bg-gray-900 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-danger-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                                <Icon icon="fontisto:nav-icon-list-a" />
                            </div>

                            <div class="mt-6 pb-6 rounded-b-xl">
                                <p class="text-gray-700 dark:text-gray-300 font-bold">Nav Generator</p>
                                <p>Create customized navbar according to your needs</p>
                            </div>
                            <div class="flex gap-3 -mb-5 py-4 border-t border-dashed">
                                <RouterLink to="/generators/nav"
                                    class="group rounded-full disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                                    <span>Generate</span>
                                    <Icon icon="mdi:arrow-right" />
                                </RouterLink>
                                <a href="https://github.com/abdify/cpcg" target="_blank" rel="noopener"
                                    class="group flex items-center rounded-full disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
                                    <span class="sr-only">Source Code</span>
                                    <Icon icon="simple-icons:github" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        class="relative group overflow-hidden p-5 rounded-xl bg-white border border-dashed dark:border-dashed dark:bg-primary-950">
                        <div aria-hidden="true"
                            class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-gray-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5">
                        </div>
                        <div class="relative">
                            <div
                                class="border border-gray-500/10 flex relative *:relative *:size-6 *:m-auto  text-gray-950 dark:text-white size-12 rounded-xl dark:bg-gray-900 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                                <Icon icon="hugeicons:coming-soon-02" />
                            </div>

                            <div class="mt-6 pb-6 rounded-b-xl">
                                <p class="text-gray-700 dark:text-gray-300 font-bold">Coming Soon!</p>
                                <!-- <p></p> -->
                            </div>

                            <div class="flex gap-3 -mb-5 py-4 border-t border-dashed">
                                <RouterLink to="/generators/nav"
                                    class="group rounded-full disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                                    <span>Generate</span>
                                    <Icon icon="mdi:arrow-right" />
                                </RouterLink>
                                <a href="https://github.com/abdify/cpcg" target="_blank" rel="noopener"
                                    class="group flex items-center rounded-full disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
                                    <span class="sr-only">Source Code</span>
                                    <Icon icon="simple-icons:github" />
                                </a>
                            </div>

                        </div>
                    </div>
                    <div
                        class="relative group overflow-hidden p-5 rounded-xl bg-white border border-dashed dark:border-dashed dark:bg-primary-950">
                        <div aria-hidden="true"
                            class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-warning-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5">
                        </div>
                        <div class="relative">
                            <div
                                class="border border-warning-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-xl dark:bg-gray-900 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-warning-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                                <Icon icon="hugeicons:coming-soon-02" />
                            </div>

                            <div class="mt-6 pb-6 rounded-b-xl">
                                <p class="text-gray-700 dark:text-gray-300 font-bold">Coming Soon!</p>
                                <!-- <p></p> -->
                            </div>

                            <div class="flex gap-3 -mb-5 py-4 border-t border-dashed">
                                <RouterLink to="/generators/form"
                                    class="group rounded-full disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                                    <span>Generate</span>
                                    <Icon icon="mdi:arrow-right" />
                                </RouterLink>
                                <a href="https://github.com/abdify/cpcg" target="_blank" rel="noopener"
                                    class="group flex items-center rounded-full disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
                                    <span class="sr-only">Source Code</span>
                                    <Icon icon="simple-icons:github" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        class="relative group overflow-hidden p-5 rounded-xl bg-white border border-dashed dark:border-dashed dark:bg-primary-950">
                        <div aria-hidden="true"
                            class="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-info-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5">
                        </div>
                        <div class="relative">
                            <div
                                class="border border-info-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-xl dark:bg-gray-900 dark:border-white/15 before:rounded-[11px] before:absolute before:inset-0 before:border-t before:border-white before:from-info-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                                <Icon icon="hugeicons:coming-soon-02" />
                            </div>

                            <div class="mt-6 pb-6 rounded-b-xl">
                                <p class="text-gray-700 dark:text-gray-300 font-bold">Coming Soon!</p>
                                <!-- <p></p> -->
                            </div>

                            <div class="flex gap-3 -mb-5 py-4 border-t border-dashed">
                                <RouterLink to="/generators/form"
                                    class="group rounded-full disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                                    <span>Generate</span>
                                    <Icon icon="mdi:arrow-right" />
                                </RouterLink>
                                <a href="https://github.com/abdify/cpcg" target="_blank" rel="noopener"
                                    class="group flex items-center rounded-full disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
                                    <span class="sr-only">Source Code</span>
                                    <Icon icon="simple-icons:github" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>

</script>

<style></style>