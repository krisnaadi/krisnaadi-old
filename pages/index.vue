<template>
  <header>
    <nav class="flex justify-between">
      <h6 class="font-heading">krisnaadi</h6>
      <a href="#">
        <PhosphorIconList :size="20" />
      </a>
    </nav>
  </header>
  <main>
    <!-- hero -->
    <div class="py-14">
      <h1 class="text-5xl font-heading font-medium">Full-stack</h1>
      <h1 class="text-5xl font-heading font-medium text-end mt-4">Developer</h1>

      <p class="pt-14 text-secondary">
        My goal is to write
        <span class="text-primary italic">maintainable</span>,
        <span class="text-primary italic">clean</span> and
        <span class="text-primary italic">understandable code</span> to process
        development was enjoyable.
      </p>
      <div class="flex text-body pt-10">
        <a
          href="#"
          class="bg-primary rounded-full py-4 w-8/12 text-center italic hover:bg-secondary hover:text-primary"
          >Projects</a
        >
        <a
          href="#"
          class="bg-primary py-4 px-5 rounded-full text-center ms-4 flex items-center justify-center hover:bg-secondary hover:text-primary"
          ><PhosphorIconArrowRight :size="22"
        /></a>
      </div>
      <div class="flex mt-14 text-secondary">
        <a
          href="#"
          class="group rounded-full py-3 px-4 italic border border-dark hover:bg-primary hover:border-primary"
        >
          <div class="flex items-center justify-center">
            <PhosphorIconGithubLogo
              :size="22"
              class="me-3 text-primary group-hover:text-body"
              weight="fill"
            />
            <span class="group-hover:text-body">Github</span>
          </div>
        </a>
      </div>
    </div>
    <!-- about -->
    <div class="mt-14">
      <h6 class="font-heading">... /About me ...</h6>

      <p class="pt-8 text-secondary">
        Hello, I'm <span class="text-primary">krisnaadi</span>, I'm
        <span class="text-primary italic">full-stack developer</span>. More than
        <span class="text-primary italic">7 years</span> experience.
      </p>
    </div>

    <div class="mt-14 p-6 bg-primary rounded-3xl text-body">
      <h6 class="text-2xl mb-4">Front-end</h6>
      <p class="font-heading text">
        Typescript / Vue / Nuxtjs / Bootstrap / Tailwind
      </p>
    </div>

    <div class="mt-14 p-6 border border-secondary rounded-3xl">
      <h6 class="text-2xl mb-4">Back-end</h6>
      <p class="font-heading">
        Laravel / PHP / Golang / PostgreSQL / MySQL / Docker / Podman /Redis
      </p>
    </div>
  </main>
  <footer></footer>
</template>
