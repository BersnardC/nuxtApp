export default defineEventHandler(async (event) => {

    const { name } = getQuery(event)
    const { age } = await readBody(event)
    /* return {
        message: `Hello, ${name}. You are ${age} years`
    } */
    // Api currencies
    const { data } = await $fetch('https://api.currencyapi.com/v3/currencies?apikey=cur_live_w7xPUkUpLBJJIQ73ZhG5fJCNDGcVuQP4WbcujwRb&currencies=EUR%2CUSD%2CCAD')
    return data
})