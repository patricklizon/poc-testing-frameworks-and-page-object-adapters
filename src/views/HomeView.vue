<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import {HomeViewPageObject} from "./HomeView.po"
</script>

<template>
  <main :data-testid="HomeViewPageObject.defaultRootTid">
    <TheWelcome :tid="HomeViewPageObject.welcomeTid" />
  </main>
</template>
