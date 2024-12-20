export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const {accessToken} = config

    const movieUrl = "https://api.themoviedb.org/3/movie/top_rated"
    const seriesUrl = "https://api.themoviedb.org/3/tv/top_rated"
    const topRatedMovies = await $fetch(movieUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`
        }
    })

    const topRatedSeries = await $fetch(seriesUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`
        }
    })

    return {
        movies : topRatedMovies,
        series : topRatedSeries
    }
})