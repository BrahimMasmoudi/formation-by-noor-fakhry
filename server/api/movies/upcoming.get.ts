export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const {accessToken} = config

    const movieUrl = "https://api.themoviedb.org/3/movie/upcoming"
    const seriesUrl = "https://api.themoviedb.org/3/tv/upcoming"
    const movies = await $fetch(movieUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`
        }
    })

    return {
        movies,
    }
})