<script setup lang="ts">
import { HelloWorldPageObject } from './HelloWorld.po';

withDefaults(defineProps<{
  tid?: string
  msg: string
}>(), {
  tid: HelloWorldPageObject.defaultRootTid
})
</script>

<template>
  <div class="greetings" :data-testid="tid">
    <h1 class="green" :data-testid="tid + '.message'">{{ msg }}</h1>
    <h3 :data-testid="tid + '.copy'">
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener" :data-testid="tid + '.external-link'">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener" :data-testid="tid + '.external-link'">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
