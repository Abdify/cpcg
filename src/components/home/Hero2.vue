<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue';
</script>

<template>
    <div class="w-full justify-center items-center relative  overflow-x-hidden lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-64">
        <div
            class="container max-w-6xl mx-auto h-full flex flex-col lg:flex-row justify-between items-center -mt-32 px-8 xl:px-0">
            <div
                class="flex flex-col items-center lg:items-start w-full max-w-xl lg:w-1/2 pt-48 lg:pt-20 xl:pt-40 text-center lg:text-left">
                <h1 class="text-gray-900 font-black text-3xl sm:text-6xl leading-tight relative mb-4 xl:mb-8">Next
                    Generation Front-End Development</h1>
                <p class="text-base sm:text-lg xl:text-xl text-gray-600 mb-8 pr-0 lg:pr-20">Generate fully functional,
                    optimized,
                    ready-to-use components with just a few clicks! Perfect for
                    developers looking to speed up their workflow and streamline component creation!</p>
                <RouterLink to="/generators/form"
                    class="mt-0 sm:mt-1 px-8 py-4 rounded-md fold-bold text-base bg-indigo-600 shadow-xl text-white border-t border-gray-200 w-auto font-bold relative self-start inline-block lg:mx-0 mx-auto">
                    Generate
                    Now!</RouterLink>
                <!-- Integrates with section -->
                <div class="hidden sm:flex flex-col mt-12 lg:mt-24">
                    <p class="text-gray-500 uppercase font-medium tracking-widest mb-4 text-sm">Integrates With</p>
                    <div class="flex">
                        <Icon icon="simple-icons:tailwindcss"
                            class="h-8 w-8 mr-4 fill-current text-gray-500 transition-color duration-150 hover:text-gray-600 cursor-pointer" />
                        <Icon icon="simple-icons:vuedotjs"
                            class="h-8 w-8 mr-4 fill-current text-gray-500 transition-color duration-150 hover:text-gray-600 cursor-pointer" />
                        <Icon icon="simple-icons:react"
                            class="h-8 w-8 mr-4 fill-current text-gray-500 transition-color duration-150 hover:text-gray-600 cursor-pointer" />
                        <Icon icon="simple-icons:solid"
                            class="h-8 w-8 mr-4 fill-current text-gray-500 transition-color duration-150 hover:text-gray-600 cursor-pointer" />
                        <Icon icon="simple-icons:angular"
                            class="h-8 w-8 mr-4 fill-current text-gray-500 transition-color duration-150 hover:text-gray-600 cursor-pointer" />
                    </div>
                </div>
                <svg class="hidden lg:block absolute w-screen max-w-3xl left-1/2 top-1/2 -translate-y-1/2"
                    viewBox="0 0 818 815" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="c">
                            <stop stop-color="#E614F2" offset="0%"></stop>
                            <stop stop-color="#FC3832" offset="100%"></stop>
                        </linearGradient>
                        <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="f">
                            <stop stop-color="#657DE9" offset="0%"></stop>
                            <stop stop-color="#1C0FD7" offset="100%"></stop>
                        </linearGradient>
                        <filter x="-4.7%" y="-3.3%" width="109.3%" height="109.3%" filterUnits="objectBoundingBox"
                            id="a">
                            <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1">
                            </feGaussianBlur>
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" in="shadowBlurOuter1">
                            </feColorMatrix>
                        </filter>
                        <filter x="-4.7%" y="-3.3%" width="109.3%" height="109.3%" filterUnits="objectBoundingBox"
                            id="d">
                            <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1">
                            </feGaussianBlur>
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter1">
                            </feColorMatrix>
                        </filter>
                        <path
                            d="M160.52 108.243h497.445c17.83 0 24.296 1.856 30.814 5.342 6.519 3.486 11.635 8.602 15.12 15.12 3.487 6.52 5.344 12.985 5.344 30.815v497.445c0 17.83-1.857 24.296-5.343 30.814-3.486 6.519-8.602 11.635-15.12 15.12-6.52 3.487-12.985 5.344-30.815 5.344H160.52c-17.83 0-24.296-1.857-30.814-5.343-6.519-3.486-11.635-8.602-15.12-15.12-3.487-6.52-5.343-12.985-5.343-30.815V159.52c0-17.83 1.856-24.296 5.342-30.814 3.486-6.519 8.602-11.635 15.12-15.12 6.52-3.487 12.985-5.343 30.815-5.343z"
                            id="b"></path>
                        <path
                            d="M159.107 107.829H656.55c17.83 0 24.296 1.856 30.815 5.342 6.518 3.487 11.634 8.602 15.12 15.12 3.486 6.52 5.343 12.985 5.343 30.816V656.55c0 17.83-1.857 24.296-5.343 30.815-3.486 6.518-8.602 11.634-15.12 15.12-6.519 3.486-12.985 5.343-30.815 5.343H159.107c-17.83 0-24.297-1.857-30.815-5.343-6.519-3.486-11.634-8.602-15.12-15.12-3.487-6.519-5.343-12.985-5.343-30.815V159.107c0-17.83 1.856-24.297 5.342-30.815 3.487-6.519 8.602-11.634 15.12-15.12 6.52-3.487 12.985-5.343 30.816-5.343z"
                            id="e"></path>
                    </defs>
                    <g fill="none" fill-rule="evenodd" opacity=".9">
                        <g transform="rotate(65 416.452 409.167)">
                            <use fill="#000" filter="url(#a)" xlink:href="#b"></use>
                            <use fill="url(#c)" xlink:href="#b"></use>
                        </g>
                        <g transform="rotate(29 421.929 414.496)">
                            <use fill="#000" filter="url(#d)" xlink:href="#e"></use>
                            <use fill="url(#f)" xlink:href="#e"></use>
                        </g>
                    </g>
                </svg>
            </div>
            <div class="flex flex-col items-end justify-center h-full w-full lg:w-1/2 ms:pl-10 relative">
                <div class="relative lg:absolute max-w-4xl xl:max-w-6xl left-0 container lg:w-screen w-full">
                    <img src="/images/hero-mockup-laptop.png"
                        class="mt-20 lg:mt-24 xl:mt-40 w-full mb-20 lg:mb-0 lg:h-full ml-0 lg:-ml-12 h-auto">
                </div>
            </div>
        </div>
    </div>
</template>