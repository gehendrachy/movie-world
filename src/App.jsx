import { useEffect, useRef, useState } from 'react'
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
import "./assets/script.js"
import ToastComponent from './components/ToastComponent.jsx'

function App() {
    const [moviesResult, setMoviesResult] = useState([]);
    const updateSearchResult = (moviesList) => {
        // console.log(moviesList);
        setMoviesResult(moviesList);
    }

    const [localMovieList, setLocalMovieList] = useState([]);
    const toastMovie = useRef({});

    const updateSavedMovieList = (newMovie) => {

        const alreadyExists = localMovieList.find(
            (item) => item.imdbID == newMovie.imdbID
        );

        if (!alreadyExists) {
            const tempMovieList = [...localMovieList, newMovie];
            setLocalMovieList(tempMovieList);
            localStorage.setItem("movieList", JSON.stringify(tempMovieList));
        }

    }

    const deleteFromSavedMovieList = (imdbID) => {
        let tempMovieList = [...localMovieList];
        let selectedMovie = tempMovieList.find((item) => item.imdbID == imdbID);
        // console.log(selectedMovie);
        // toastMovie.current = selectedMovie;
        
        tempMovieList = tempMovieList.filter((item) => item.imdbID != imdbID);

        setLocalMovieList(tempMovieList);
        localStorage.setItem("movieList", JSON.stringify(tempMovieList));

    }

    const fetchMoviesFromLocalStorage = () => {
        const tempMovieList = JSON.parse(localStorage.getItem("movieList")) || [];
        setLocalMovieList(tempMovieList);
    }

    useEffect(() => {
        
        const toastLiveExample = document.getElementById('liveToast');
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
        toastBootstrap.show();
        
        fetchMoviesFromLocalStorage();
    }, []
    );


    return (
        <>
            <img width="100px" src={favicon} alt="logo" />
            <Title />
            <Search updateSearchResult={updateSearchResult} />
            <Result moviesList={moviesResult} updateSavedMovieList={updateSavedMovieList} />
            {/* <Hero/> */}
            <SavedMovies moviesList={localMovieList} deleteFromSavedMovieList={deleteFromSavedMovieList} />

            <ToastComponent title={toastMovie.current.title}/>
        </>
    )
}

export default App
