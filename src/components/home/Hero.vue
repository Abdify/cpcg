<template>
  <section id="hero">
    <div
      class="h-[calc(100dvh-64px)] container relative flex flex-col md:flex-row items-center justify-between gap-10 py-20">
      <div class="w-full md:w-1/3">
        <h1 class="text-4xl text-primary-dark-blue pb-5 font-medium">
          Next Generation <br />
          Front-End Development
        </h1>
        <p class="text-neutral-grayish-blue text-xs lg:text-base leading-5 mb-7">
          Create and customize components for popular frameworks like React.js and Vue.js
          effortlessly with our intuitive component generator tool. Generate fully functional,
          ready-to-use components with just a few clicks—no coding required. Perfect for
          developers looking to speed up their workflow and streamline component creation!
        </p>
        <RouterLink to="/generators/form"
          class="bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-sm bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness mb-7 focus:outline-none focus:ring ring-green-400">
          Form Generator
        </RouterLink>
      </div>

      <div class="w-full md:w-2/3 relative">
        <img src="/images/bg-intro-desktop.svg" class="" />
        <img src="/images/all-devices-white.png" class="absolute top-1/2 -translate-y-1/2 right-0" />
      </div>
    </div>
  </section>
</template>
