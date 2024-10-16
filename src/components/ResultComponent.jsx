import React from 'react'
import MovieList from './MovieListComponent'

export default function Result({moviesList}) {
	return (
		<>
			<MovieList moviesList={moviesList}/>
		</>
	)
}
