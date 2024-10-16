import React from 'react'
import MovieList from './MovieListComponent'

export default function Result({moviesList, updateSavedMovieList}) {
	return (
		<>
			<MovieList moviesList={moviesList} updateSavedMovieList={updateSavedMovieList} cardType="search"/>
		</>
	)
}
