export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const {accessToken} = config

    const id = event.context.params?.id
    const type = event.context.params?.type

    const item = await $fetch(`https://api.themoviedb.org/3/${type}/${id}`, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`
        }
    })

    return {
        item,
    }
})