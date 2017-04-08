import { Record } from 'immutable'

export type IMovie = {
  url: string,
  description: string
}

export type IMovieRecord = Record.Class<IMovie>

export const toRecord = (movie: IMovie): Record.Instance<IMovie> => 
  new (Record({
    url: "",
    description: ""
  }, "Movie"))(movie)
