<!--pages/login.vue-->
<!--New default landing page redirected from 'index.vue'-->

<template>
    <div>
        <br>
        <title>Login</title>
        <h2 class="text-center text-primary">Welcome to TODOAPP</h2>  

        <!--A form within a box/container-->
        <div class="container mt-5"> <!--Margin Top-->
            <div class="card" style="max-width: 400px; margin: auto;"> <!--Max width and center-->
                <form @submit.prevent="processCred" class="card-body">
                    <div class="mb-3"> <!--Margin Bottom--> 
                        <label for="email" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="email" placeholder="Email Address" required>
            </div> 
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary" @click="processBtn">Sign in</button>
                </form>
        </div>
    </div>
        <br>

        <!--External Links-->
        <div class="d-flex justify-content-center">
            <NuxtLink to="https://github.com/nuxt" target="_blank" no-rel class="me-3"> <!--Link to GitHub Web-->
                Nuxt GitHub
            </NuxtLink>
            <NuxtLink to="/about"> <!--Link to 'about.vue'-->
                About This Page
            </NuxtLink>
        </div>
    </div>
</template>
  

<script setup>
import { ref } from 'vue';

// Declare REACTIVE Variable for user input
const email = ref('')
const password = ref('')

// JS Function to process data
function processBtn() {
    alert("You have pressed SIGN IN!")
}

</script>

<!--FOLLOW UP ACTIONS:
Complete 'about.vue' style setup [DONE]

Build a simple Database
After pressing 'Sign In' build JS function to process and verify user input
or maybe use v-if/v-else (VUE)
-->

<!--Issues:
1. ESLint: Can't seem to bypass 'multi-word component error', despite changing ESLint configs


-->