<template>
  <div class="w-auto flex items-center justify-center">
    <form style="width: 500px" class="mt-4">
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
               fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input v-model="search" type="text"
               class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Search movie or a series..."
               @keydown.enter.prevent="onSubmitClick"
               required/>
        <button @click="onSubmitClick"
                type="button"
                :disabled="search.length === 0"
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Search
        </button>
      </div>
    </form>
  </div>


  <section v-if="movies.length>0">
    <h1 class=" mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
      Now playing Movies
    </h1>

    <ul class="grid grid-cols-5 gap">
      <li v-for="movie in movies ??[]">
        <MovieCard :movie="movie"/>
      </li>
    </ul>
  </section>

  <section v-if="series.length>0">
    <h1 class=" mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
      Now playing TV series
    </h1>

    <ul class="grid grid-cols-5 gap">
      <li v-for="serie in series ??[]">
        <SeriesCard :series="serie"/>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type {Movie} from "~/types/movie";
import type {Series} from "~/types/series";

const search = ref('')

const movies = ref<Movie[]>([])
const series = ref<Series[]>([])

const onSubmitClick  = async () => {
  await useFetch('/api/movies/search', {
    query: {
      search: search.value
    },
    transform: data => {
      console.log(data)
      movies.value = data.movies.results
      series.value = data.series.results
    }
  })
}

</script>

<style scoped>

</style>