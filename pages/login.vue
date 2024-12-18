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
import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://fwqlshkaqymgeynycmmb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3cWxzaGthcXltZ2V5bnljbW1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzOTkzMTIsImV4cCI6MjA0Njk3NTMxMn0.EIZrwerwS1-MR8xT0Vq7_i0KygE5zY9egAPXwoYQgV0')
const auth_list = ref([]) // Custom made variable to store data from SUPABASE

// Declare REACTIVE Variable for user input
const email = ref('')
const password = ref('')
const router = useRouter();
const loginError = ref('');
const isCapsLockON = ref('')


async function getList() {
    // Fetches data from SUPABASE
    const { data, error } = await supabase.from('sql_auth_list').select('email , password');

    if (error) {
        console.error('Error fetching data:', error.message); // Error message from SUPABASE
        return;
    }

    auth_list.value = data
}

// Ensures 'getList' is executed at correct time (only after data is returned)
onMounted(() => {
    getList()
})


async function processBtn() {
    loginError.value = ''; // Clear error
    const user = auth_list.value.find(user => // Checks user input with 'sql_auth_list' from SUPABASE
        user.email === email.value && user.password === password.value
    );

    if (user) {
            localStorage.setItem('user_email', user.email) // Store user session to redirect to user homepage
            router.push('/home'); } // Route to user homepage

    else {
        loginError.value = "Invalid Email or Password. Please try again." // Eliminates use of pop-up + Better aesthetics
    }
}

function checkCapsLock(event) {
    isCapsLockON.value = event.getModifierState('CapsLock');
}

</script>