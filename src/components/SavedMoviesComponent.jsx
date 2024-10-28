import React, { useState } from 'react'
import Switch from './SwitchComponent'
import MovieList from './MovieListComponent'

export default function SavedMovies({ moviesList, deleteFromSavedMovieList }) {

  const [movieType, setMovieType] = useState("All");

  const filteredMovieList = moviesList.filter((item) => {
    return movieType === "All" || item.listType === movieType;
  });

  return (
    <>
      <Switch setMovieType={setMovieType} movieCount={filteredMovieList.length} />
      <hr />
      <MovieList moviesList={filteredMovieList} deleteFromSavedMovieList={deleteFromSavedMovieList} cardType="saved" />
    </>
  )
}
