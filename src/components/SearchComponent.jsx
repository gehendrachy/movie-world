import axios from 'axios';
import React, { useRef } from 'react'
import { fetchMultipleMoviesList } from '../utils/fetchAPI';

export default function Search({updateSearchResult}) {
	const searchInput = useRef("john");
	
	const onSubmitSearch = async (event) => {
		event.preventDefault();
		const searchQuery = searchInput.current.value;
		const tempMovieList = await fetchMultipleMoviesList(searchQuery);
		console.log(tempMovieList);
		updateSearchResult(tempMovieList);
		
	}
	return (
		<>
			<form onSubmit={onSubmitSearch}>
				<div className="input-group pb-3">
					<input type="text" className="form-control" placeholder="Search Movie..." name='searchInput' ref={searchInput}/>
					<button className="btn btn-outline-primary" type="submit" id="button-addon2">Search</button>
				</div>

			</form>
		</>
	)
}
