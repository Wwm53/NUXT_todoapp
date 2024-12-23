<template>
    <div>
      <title>Homepage</title>
      <br>
      <h2>WELCOME, {{  user.first_name }}</h2>
      <h2 class='text-center text-primary'>Welcome {credentials.first_name}!</h2>
    </div>

    <ul>
    <p>1. SUPABASE Testing (fetching data)</p>
  
    <li v-for="credential in credentials" :key="credential.id">
      {{ credential.email }} - {{ credential.password }}</li> <!--Comma returns value, not for concetanating-->
    </ul>

  </template> 
  
  <script setup>
  /* Fetching data from SUPABASE (working)
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
  */

  //NEW METHOD TRIAL
  import { useRouter } from 'vue-router';
  import { createClient } from '@supabase/supabase-js'
  const supabase = createClient('https://fwqlshkaqymgeynycmmb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3cWxzaGthcXltZ2V5bnljbW1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzOTkzMTIsImV4cCI6MjA0Njk3NTMxMn0.EIZrwerwS1-MR8xT0Vq7_i0KygE5zY9egAPXwoYQgV0')

  const { data, error } = await supabase
    .from('sql_auth_list')
    .select('*')
    .eq('id', userId)
    .single()

    if (data) {
      user.value = data
    } else {
      console.error(error?.message)
    }


</script>