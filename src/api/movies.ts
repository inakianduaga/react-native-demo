/* Movie info provided by the omdb API */
export interface IApiMovieResponse {
  Title: string,
  Year: string,
  imdbID: string,
  Type: 'movie',
  Poster: string,
}

interface IMoviesResponseSuccess {
  Response: "True",
  Search: IApiMovieResponse[],
  totalResults: string
}

interface IMovieResponseFailed {
  Response: "False", 
  Error: string
}

export type IMoviesResponse = IMoviesResponseSuccess | IMovieResponseFailed