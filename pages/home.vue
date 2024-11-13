<template>
    <div>
      <title>Homepage</title>
      <br>
      <h2 class='text-center text-primary'>Welcome {dynamic_username}!</h2>
    </div>


    <ul>
    <p>1. SUPABASE Testing (sample)</p>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>

    <ul>
    <p>2. SUPABASE Testing (authentication) </p>
    <li v-for="credential in credentials" :key="credential.id">
      {{ credential.email }} - {{ credential.password }}</li> <!--Comma returns value, not for concetanating-->
    </ul>

  </template> 
  
  <script setup>
  // 1. SUPABASE Testing (sample)
  import { createClient } from '@supabase/supabase-js'
  const supabase = createClient('https://fwqlshkaqymgeynycmmb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3cWxzaGthcXltZ2V5bnljbW1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzOTkzMTIsImV4cCI6MjA0Njk3NTMxMn0.EIZrwerwS1-MR8xT0Vq7_i0KygE5zY9egAPXwoYQgV0')
  const countries = ref([])
  
  async function getCountries() {
    const { data } = await supabase.from('sample_countries').select()
    countries.value = data
  }
  
  onMounted(() => {
    getCountries()
  })

  // 2. SUPABASE Testing (authentication)
  const credentials = ref([])
  
  async function getCredentials() {
    const { data } = await supabase.from('sql_auth_list').select()
    credentials.value = data
  }
  
  onMounted(() => {
    getCredentials()
  })
  </script>