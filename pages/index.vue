<!--pages/index.vue-->
<!--Default Landing page used to be redirected to 'login.vue', the NEW default landing page-->

<template>
    <div class="text-center">
        <h2>Redirecting to Login......</h2>
    </div>
    
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();

// Automatically redirect
onMounted(() => {
    router.push('/login'); // Pages is DEFAULT DIR; only specify filename
  });
</script>