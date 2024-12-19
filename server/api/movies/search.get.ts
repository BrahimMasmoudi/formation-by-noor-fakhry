export default defineEventHandler(async (event) => {
    const userQuery = getQuery(event)

    const {search} = userQuery
    const config = useRuntimeConfig(event)
    const {accessToken} = config


    const foundMovies = await $fetch('https://api.themoviedb.org/3/search/movie', {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        query: {
            query: search
        }
    })

    const foundSeries = await $fetch('https://api.themoviedb.org/3/search/tv', {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        query: {
            query: search
        }
    })

    return {
        movies: foundMovies,
        series: foundSeries
    }
})