export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const {accessToken} = config

    const movieUrl = "https://api.themoviedb.org/3/movie/now_playing"
    const nowPlayingMovies = await $fetch(movieUrl, {
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
        nowPlayingMovies
    }
})