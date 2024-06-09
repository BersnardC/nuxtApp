<script setup>
/* const { data } = await useFetch('/api/ninja?name=hotaru', {
  method: 'POST',
  body: { age: 30 }
}) */

const {data} = await useFetch('/api/currency/USD')
</script>

<template>
  <div>
    <h1>About</h1>
    <p>About Page {{ data }}</p>
  </div>
</template>

<style></style>