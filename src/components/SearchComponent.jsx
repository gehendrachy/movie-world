import axios from 'axios';
import React, { useRef } from 'react'
import { fetchMultipleMoviesList } from '../utils/fetchAPI';

export default function Search({updateSearchResult}) {
	const searchInput = useRef();
	
	const onSubmitSearch = async (event) => {
		event.preventDefault();
		const searchQuery = searchInput.current.value;
		const tempMovieList = await fetchMultipleMoviesList(searchQuery);
		
		updateSearchResult(tempMovieList);
		
	}
	return (
		<>
			<form onSubmit={onSubmitSearch}>
				<div className="input-group mb-3">
					<input type="text" className="form-control" placeholder="Search Movie..." name='searchInput' ref={searchInput} aria-label="Recipient's username" aria-describedby="button-addon2"/>
					<button className="btn btn-outline-primary" type="submit" id="button-addon2">Button</button>
				</div>

			</form>
		</>
	)
}
