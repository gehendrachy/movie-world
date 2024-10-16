import React from 'react'
import Switch from './SwitchComponent'
import MovieList from './MovieListComponent'

export default function SavedMovies({moviesList, deleteFromSavedMovieList}) {
  return (
    <>
        <Switch/>
		<hr />
		<MovieList moviesList={moviesList} deleteFromSavedMovieList={deleteFromSavedMovieList} cardType="saved"/>
    </>
  )
}
