<script setup>
definePageMeta({
  layout: 'products'
})

const { data:products } = useFetch('https://fakestoreapi.com/products')

useHead({
  title: "Nuxt Awesome App | Marketplace",
      meta: [
        { name: "description", content: "Awesome Marketplace"}
      ]
})

</script>

<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p"></ProductCard>
      </div>
    </div>
  </div>
</template>

<style></style>