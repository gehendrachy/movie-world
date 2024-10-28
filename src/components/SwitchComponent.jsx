import React from 'react'
export default function Switch({setMovieType, movieCount = 0}) {
	return (
		<>
			<div className="d-flex justify-content-between pt-3">
				<div className="btn-group" role="group">
					<button onClick={() => { setMovieType("All") }} className="btn btn-outline-dark">All</button>
					<button onClick={() => { setMovieType("Thriller") }} className="btn btn-outline-dark">Thriller</button>
					<button onClick={() => { setMovieType("Action") }} className="btn btn-outline-dark">Action</button>
				</div>

				<p>{movieCount} movies listed.</p>
			</div>
		</>
	)
}
