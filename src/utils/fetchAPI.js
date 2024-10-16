import axios from "axios";

export const fetchMultipleMoviesList = async (searchQuery) => {
    const response = await axios.get(`${import.meta.env.VITE_OMDB_URL}?apikey=${import.meta.env.VITE_API_KEY}&s=${searchQuery}`);
    // console.log(response.data.Search);
    
    const tempMovieList = [];
    const searchResponse = [...response.data.Search];
    
    for (let i = 0; i < searchResponse.length; i++) {
        const singleMovie = await axios.get(`${import.meta.env.VITE_OMDB_URL}?apikey=${import.meta.env.VITE_API_KEY}&i=${searchResponse[i].imdbID}`);
        
        tempMovieList.push({
            title: singleMovie.data.Title,
            imdbRating: singleMovie.data.imdbRating,
            plot: singleMovie.data.Plot,
            posterSrc: singleMovie.data.Poster,
            imdbID: singleMovie.data.imdbID,
            duration: singleMovie.data.Runtime
        });
    }

    return tempMovieList;
}