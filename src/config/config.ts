const config = {
  movies: {
    api: {
      baseUrl: 'http://www.omdbapi.com/',      
    },
    /* Debouncing wait for search text input (miliseconds) */
    inputDebounce: 1000,
    pagination: {
      resultsPerPage: 10, // fixed, API doesn't support changing this
      maxPaginationElements: 5,
    }
  }
}

export default config;