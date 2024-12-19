<template>
  <div>
    <section>
      <h1 class=" mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Featured Movies
      </h1>

      <ul class="grid grid-cols-5 gap">
        <li v-for="movie in movies">
          <MovieCard :movie="movie"/>
        </li>
      </ul>
    </section>

    <section>
      <h1 class=" mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Featured Tv Series
      </h1>
      <ul class="grid grid-cols-5 gap">
        <li v-for="series in seriesList">
          <SeriesCard :series="series"/>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
const movies = useState(() => [])
const seriesList = useState(() => [])


await useFetch('/api/movies/discover', {
  transform: data => {
    movies.value = data.movies.results
    seriesList.value = data.series.results
  }
})


</script>

<style scoped>

</style>