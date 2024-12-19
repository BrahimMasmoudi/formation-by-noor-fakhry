<template>
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <NuxtLink @click="changeItemState" :to="`/item/${movie.title}`">
      <img class="rounded-t-lg" :src="`${imageSiteUrl}${movie.poster_path}`" alt="Movie Image"/>
    </NuxtLink>
    <div class="p-5">
      <span>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ movie.title }}
        </h5>
      </span>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Release date : {{ movie.release_date }}
      </p>
      <p v-if="movie.overview"
         class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {{ movie.overview }}
      </p>

      <p v-else
         class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        No overview available
      </p>
    </div>
  </div>

</template>

<script setup lang="ts">
import type {Movie} from "~/types/movie";

defineProps<{
  movie: Movie
}>()

const imageSiteUrl = 'https://image.tmdb.org/t/p/w500/'

const itemState = useState('chosenItem', () => {
})

const changeItemState = (item: any) => {
  itemState.value = item
}
</script>

<style scoped>

</style>