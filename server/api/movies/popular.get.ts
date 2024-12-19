export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const {accessToken} = config

    const movieUrl = "https://api.themoviedb.org/3/movie/popular"
    const seriesUrl = "https://api.themoviedb.org/3/tv/popular"
    const popularMovies = await $fetch(movieUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        query: {
            include_adult: false,
            include_video: false,
            language: 'en-US',
            page: '1',
            sort_by: 'popularity.desc'
        }
    })

    const popularSeries = await $fetch(seriesUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        query: {
            include_adult: false,
            include_video: false,
            language: 'en-US',
            page: '1',
            sort_by: 'popularity.desc'
        }
    })

    return {
        movies : popularMovies,
        series : popularSeries
    }
})