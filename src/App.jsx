import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/TitleComponent'
import Search from './components/SearchComponent'
import Result from './components/ResultComponent'
import Hero from './components/HeroComponent'
import SavedMovies from './components/SavedMoviesComponent'
import favicon from './assets/favicon.png'
import Test from './components/TestComponent'
import MovieList from './components/MovieListComponent.jsx'

function App() {
    const [moviesResult, setMoviesResult] = useState([]);
    const updateSearchResult = (moviesList) => {
        // console.log(moviesList);
        setMoviesResult(moviesList)
    }

    const [localMovieList, setLocalMovieList] = useState([]);

    const updateSavedMovieList = (newMovie) => {
        
        const alreadyExists =   localMovieList.find(
                                    (item) => item.imdbID == newMovie.imdbID
                                );
        
        if(!alreadyExists){
            const tempMovieList = [...localMovieList, newMovie];
            setLocalMovieList(tempMovieList);
            localStorage.setItem("movieList", JSON.stringify(tempMovieList));
        }

    }

    const fetchMoviesFromLocalStorage = () => {
        const tempMovieList = JSON.parse(localStorage.getItem("movieList")) || [];
        setLocalMovieList(tempMovieList);
    }

    useEffect(() => {
            fetchMoviesFromLocalStorage();
        },[]
    );

    
    return (
        <>
            <img width="50px" src={favicon} alt="logo" />
            <Title/>
            <Search updateSearchResult={updateSearchResult} />
            <Result moviesList={moviesResult} updateSavedMovieList={updateSavedMovieList}/>
            <Hero/>
            <SavedMovies moviesList={localMovieList}/>
        </>
    )
}

export default App
