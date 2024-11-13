<!--pages/login.vue-->
<!--New default landing page redirected from 'index.vue'-->

<template>
    <div>
        <br>
        <title>Login</title>
        <h2 class="text-center text-primary">Welcome to TODOAPP</h2>  

        <!--A form within a container-->
        <div class="container mt-5"> <!--Margin Top-->
            <div class="card" style="max-width: 400px; margin: auto;">

                <form @submit.prevent="processBtn" class="card-body">
                    <div class="mb-3"> <!--Margin Bottom-->
                        <label for="email" class="form-label">Email Address</label>
                        <input v-model="email" type="email" class="form-control" id="email" placeholder="Email Address" required>
                    </div>

                     <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input v-model="password" type="password" class="form-control" id="password" placeholder="Password" @keyup="checkCapsLock($event)"> <!--Keyup checks state of CapsLock-->
                        <span v-if="isCapsLockON === true" style="color: red">Caps Lock is ON</span>
                    </div>

                    <p v-if="loginError" class="text-danger text-center"> {{ loginError }}</p>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
        </div>
    </div>
    <br>

        <!--External Links-->
        <div class="d-flex justify-content-center">
            <NuxtLink to="https://github.com/nuxt" target="_blank" no-rel class="me-3">
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
import { useRouter } from'vue-router';

// Declare REACTIVE Variable for user input
const email = ref('')
const password = ref('')
const router = useRouter();
const loginError = ref('');
const isCapsLockON = ref('')


// JS Function to process/validate data
function processBtn() {
    loginError.value = ''; // Clear value

    if (email.value === "user1@gmail.com" && password.value == 'user1P@ssw0rd') { // Modify to include SUPABASE table for authentication
        router.push('/home');
    }
    else {
        loginError.value = "Invalid Email or Password. Please try again." // Eliminates use of pop-up + Better aesthetics
    }
}

function checkCapsLock(event) {
    isCapsLockON.value = event.getModifierState('CapsLock'); 
}
</script>