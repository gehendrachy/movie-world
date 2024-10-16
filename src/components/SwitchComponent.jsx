import React from 'react'

export default function Switch() {
	return (
		<>
			<div className="d-flex justify-content-between pt-3">
				<div className="btn-group" role="group">
					<button type="button" className="btn btn-outline-dark">All</button>
					<button type="button" className="btn btn-outline-dark">Thriller</button>
					<button type="button" className="btn btn-outline-dark">Action</button>
				</div>

				<p>10 movies listed.</p>
			</div>
		</>
	)
}
