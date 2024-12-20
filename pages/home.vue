<template>
    <div>
      <title>Homepage</title>
      <br>
      <h2 class='text-center text-primary'>Welcome {credentials.first_name}!</h2>
    </div>

    <ul>
    <p>1. SUPABASE Testing (fetching data)</p>
  
    <li v-for="credential in credentials" :key="credential.id">
      {{ credential.email }} - {{ credential.password }}</li> <!--Comma returns value, not for concetanating-->
    </ul>

  </template> 
  
  <script setup>
  


  // Fetching data from SUPABASE
  import { createClient } from '@supabase/supabase-js'
  const supabase = createClient('https://fwqlshkaqymgeynycmmb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3cWxzaGthcXltZ2V5bnljbW1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzOTkzMTIsImV4cCI6MjA0Njk3NTMxMn0.EIZrwerwS1-MR8xT0Vq7_i0KygE5zY9egAPXwoYQgV0')
  const credentials = ref([])

  async function getCredentials() {
    const { data } = await supabase.from('sql_auth_list').select()
    credentials.value = data
  }
  
  onMounted(() => {
    getCredentials()
  })

</script>

<!-- BY USING 'localstoragesession', no need to create another client OR create another query

[TESTING] Check for created 'localStorage' created in /login route

const loggedInUserEmail = localStorage.getItem(user_email)

/* If user is logged in, user-specific data is fetched without needing another query
if (loggedInUserEmail) { 
  const { data, error } = await supabase
    .from(user_data) // Just based off user_email to fetch other details
    .select('*')
    .eq('email', loggedInUserEmail)
    .single();

    if (error) {
      console.error('Error fetching data'. error.message) // Message from SUPABASE
    } else {
      console.log('User Data:', data);
    }
  } else {
    router.push('/login') // If no user session found in localStorage
  }
-->