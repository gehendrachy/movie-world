import React from 'react';



export default function Card({ movie, updateSavedMovieList, cardType, deleteFromSavedMovieList}) {

    const addToList = (listType) => {
        const tempMovie = {...movie, listType: listType};
        // console.log("movie", movie);
        updateSavedMovieList(tempMovie);
    }

    

    return (
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <img src={movie.posterSrc} className="bd-placeholder-img card-img-top" width="100%"/>

                    <div className="card-body text-start">
                        <h5 className="card-title">{movie.title}</h5>
                        <small className="text-body-secondary">{movie.duration}</small>
                        <p className="card-text fs-6">{movie.plot.substr(0, 50)}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-warning">View Details</button>
                                {
                                    cardType === "search" ? (
                                       
                                            <div className="btn-group" role="group">
                                                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Add to List
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a style={{ cursor: 'pointer' }} className="dropdown-item" onClick={ () => addToList('Thriller') }>Thriller</a>
                                                    </li>
                                                    <li>
                                                        <a style={{ cursor: 'pointer' }} className="dropdown-item" onClick={ () => addToList('Action') }>Action</a>
                                                    </li>
                                                </ul>
                                                
                                            </div>
                                           
                                        
                                    ) : 
                                    <button type="button" className="btn btn-danger" onClick={() => deleteFromSavedMovieList(movie.imdbID)}>Delete</button>
                                }
                                
                            </div>
                            {/* <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
