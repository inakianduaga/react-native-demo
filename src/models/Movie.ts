import { Record } from 'immutable'

export type IMovie = {
  title: string,
  year: string,
  imdbID: string,
  poster: string
  type: string
}

export type IMovieRecord = Record.Class<IMovie>

export const toRecord = (movie: IMovie): Record.Instance<IMovie> => 
  new (Record({
    title: "",
    year: "",
    imdbID: "",
    poster: "",
    type: ""
  }, "Movie"))(movie)
