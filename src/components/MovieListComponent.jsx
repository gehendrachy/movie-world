import React from 'react'
import Card from './CardComponent'

export default function MovieList({moviesList, updateSavedMovieList, deleteFromSavedMovieList, cardType}) {
	// console.log("test",moviesList);
	return (
		<>
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
				{
					moviesList ? moviesList.map((movie,index) => {
						return (
							<Card 
								key={index}
								movie={movie}
								cardType={cardType}
								updateSavedMovieList={updateSavedMovieList}
								deleteFromSavedMovieList={deleteFromSavedMovieList}
								/>
						)
					})
					: ""
				}
				
			</div>
		</>
	)
}
