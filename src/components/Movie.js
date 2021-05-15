import React from 'react'




 



function Movie( props ) {

    const Image_API = "https://image.tmdb.org/t/p/w500";

    const setVOteClass = (vote) => {
        if(vote >= 8) {
            return "green"
        }else if(vote>=6){
            return "orange"
        }else {
            return "red"
        }
    };

    // console.log(props.data);

    return (
        <div className="movie" >

            <img src={ (props.data.poster_path) ? Image_API+ props.data.poster_path : "https://images.unsplash.com/photo-1529088148495-2d9f231db829?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" }
             alt={props.data.title} />
            
            <div className="movie-info" >
                <h3> {(props.data.title) ? props.data.title : props.data.original_name } </h3>
                <span className={`tag ${setVOteClass(props.data.vote_average)}`} > {props.data.vote_average} </span>
            </div>

            <div className="movie-overview">
                <h2>Overview</h2>
                <p> {props.data.overview} </p>
            </div>
        
            
        </div>
    )
}

export default Movie;

