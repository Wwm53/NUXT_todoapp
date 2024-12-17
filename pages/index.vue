<!--pages/index.vue-->
<!--Default Landing page used to be redirected to 'login.vue', the NEW default landing page-->

<template>
    <br>
    <div class="text-center">
        <h4>Redirecting to Login......</h4>
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