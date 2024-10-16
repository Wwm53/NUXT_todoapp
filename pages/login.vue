<!--pages/login.vue-->
<!--New default landing page redirected from 'index.vue'-->

<template>
    <div>
        <br>
        <h2 class="text-center text-primary">Welcome to TODOAPP</h2>  

        <!--A form within a box/container-->
        <div class="container mt-5"> <!--Margin Top-->
            <div class="card" style="max-width: 400px; margin: auto;"> <!--Max width and center-->
                <form class="card-body">
                    <div class="mb-3"> <!--Margin Bottom--> 
                        <label for="email" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="email" placeholder="Email Address" required>
            </div> 
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
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
                About Page
            </NuxtLink>
        </div>
    </div>
</template>
  

<script setup>
</script>

<!--FOLLOW UP ACTIONS:
Build a simple Database
After pressing 'Sign In' build JS function to process and verify user input
or maybe use v-if/v-else (VUE)
-->

<!--Issues:
1. ESLint: Can't seem to bypass 'multi-word component error', despite changing ESLint configs


-->