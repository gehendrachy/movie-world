import { useState } from 'react'
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
    
    return (
        <>
            <img width="50px" src={favicon} alt="logo" />
            <Title/>
            <Search updateSearchResult={updateSearchResult} />
            <Result moviesList={moviesResult}/>
            <Hero/>
            <SavedMovies/>
        </>
    )
}

export default App
