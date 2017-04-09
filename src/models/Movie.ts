import { Record } from 'immutable'

export type IMovie = {
  title: string,
  year: string,
  imdbID: string,
  poster: string
  type: string
}

export type IMovieRecord = Record.Class<IMovie>

export type IMovieInstance = Record.Instance<IMovie>

export const toRecord = (movie: IMovie): IMovieInstance => 
  new (Record({
    title: "",
    year: "",
    imdbID: "",
    poster: "",
    type: ""
  }, "Movie"))(movie)
