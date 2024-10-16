import React from 'react'
import Switch from './SwitchComponent'
import MovieList from './MovieListComponent'

export default function SavedMovies({moviesList}) {
  return (
    <div>
        <Switch/>
        <MovieList/>
		<MovieList moviesList={moviesList} cardType="saved"/>

    </div>
  )
}
