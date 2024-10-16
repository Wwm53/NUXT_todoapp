<!--DO NOT MOVE THIS FILE OUT OF ROOT DIR-->
<!--Declare any GLOBAL styling to be kept constant ACROSS ALL WEBPAGES HERE-->

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />

  </div>
</template>

<script setup lang="ts"> // Support TypeScript
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();

// Automatically redirect
onMounted(() => {
  router.push('/login'); // Specify 'pages' dir 1st
});
</script>

<style>
</style>