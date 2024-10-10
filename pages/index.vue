<!--index.vue will become the login page-->

<template>
    <div>
        <h2 class="text-center text-primary">Welcome to TODOAPP (index.vue)</h2>
        <br>    

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


        <!--After pressing 'Sign In' definitely need to use JS to process and verify user input
        or maybe use v-if/v-else (VUE)
        -->
        <!--Centralise and put both links side by side; maybe add more link to the sides-->
        <NuxtLink to="https://github.com/nuxt" target="_blank" no-rel> <!--Link to GitHub Web-->
            Nuxt GitHub
        </NuxtLink>
        <br>
        <NuxtLink to="/about"> <!--Link to 'about.vue'-->
            About Page
        </NuxtLink>
    </div>
  </template>
  