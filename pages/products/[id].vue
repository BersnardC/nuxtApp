<script setup>

definePageMeta({
    layout: 'products'
})
const { id } = useRoute().params;
const uri = 'https://fakestoreapi.com/products/' + id;
const { data: product } = await useFetch(uri, {
    key: id,
    onResponse({ request, response, options }) {
        // Process the response data
        console.log('Response data', response);
        if (!response._data) {
            throw createError({ statusCode: 404, statusMessage: 'Product not found!', fatal: true });
        }
    },
    onResponseError({ request, response, options }) {
        console.log('Response Error', response);
        throw createError({ statusCode: 404, statusMessage: 'Product not found!', fatal: true });
    }
});
if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found!', fatal: true });
}
</script>

<template>
    <div v-if="product">
        <Head>
            <Title>Nuxt App | {{ product.title }}</Title>
            <Meta name="description" :content="product.description">
            </Meta>
        </Head>
        <ProductDetails :product="product" />
    </div>
</template>

<style></style>