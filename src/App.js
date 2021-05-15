import React, { useState, useEffect } from 'react';

// import './index.css';
import Movie from './components/Movie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// API_key_movie = "3dd175dad22ae2a5f030f0010d3b9b90"

//  Image_API = "https://image.tmdb.org/t/p/w500"
// Movie_API = "https://api.themoviedb.org/3/movie/550?api_key=3dd175dad22ae2a5f030f0010d3b9b90"

// movie-api = "https://api.themoviedb.org/3/discove r/movie?sort_by=popularity.desc&?api_key=3dd175dad22ae2a5f030f0010d3b9b90&page=1"
//             "https://api.themoviedb.org/3/trending/all/day?api_key=3dd175dad22ae2a5f030f0010d3b9b90"

// search_API = "https://api.themoviedb.org/3/search/movie?api_key=3dd175dad22ae2a5f030f0010d3b9b90&query="


function App() {

  
  const [ movies, setMovies ] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  const [searchOn, setsearchOn] = useState(false);

  const movieDataURL = "https://api.themoviedb.org/3/trending/all/day?api_key=3dd175dad22ae2a5f030f0010d3b9b90";
  const search_API = "https://api.themoviedb.org/3/search/movie?api_key=3dd175dad22ae2a5f030f0010d3b9b90&query=";
  
  useEffect(() => {
   getMovies(movieDataURL);
      // console.log(movies);
   
  }, [])

  const getMovies = (API) => {
    console.log(API);
    fetch(API)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      setMovies(data.results)     
      });
    // setsearchOn(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      if(searchTerm){
        getMovies(search_API + searchTerm);
        setsearchOn(true);
      }
      // setsearchTerm("");  
      // setsearchOn(false);
  }

    
  const handleChange = (e) => {
    setsearchTerm(e.target.value);
    setsearchOn(false);
  }

  const listClickHandler = (e) => {
    // console.log(e.target.textContent);
    const page = e.target.textContent;
    if(page === "1"){
        const newURL = (searchOn) ? (search_API + searchTerm + "&page=2") : (movieDataURL + "&page=2");
        // setsearchTerm()
        // console.log(newURL);
        getMovies(newURL);
        // setsearchTerm("");
    }
    else if(page === "2"){
      const newURL = (searchOn) ? (search_API + searchTerm + "&page=3") : (movieDataURL + "&page=3");
      // setsearchTerm()
      // console.log(newURL);
      getMovies(newURL);
      // setsearchTerm("");
    }
    else if(page === "3"){
      const newURL = (searchOn) ? (search_API + searchTerm + "&page=4") : (movieDataURL + "&page=4");
      // setsearchTerm()
      // console.log(newURL);
      getMovies(newURL);
      // setsearchTerm("");
    }
    else if(page === "Next"){
      const newURL = (searchOn) ? (search_API + searchTerm + "&page=5") : (movieDataURL + "&page=5");
      // setsearchTerm()
      // console.log(page);
      // console.log(newURL);
      getMovies(newURL);
      // setsearchTerm("");
    }
    
  }

  // console.log(movies);

  return (

    <>
   
    <Router>
    {/* <Route path={ `/${searchTerm}` } /> */}
      <header>
      
      <h2 className="title" > <i> <Link to="/" > Movie Trendzz </Link> </i> </h2>
   

      
      
    {/* <ul>
      <li>trending</li>
      <li>horror</li>
    </ul> */}


      <form onSubmit={handleSubmit}>
        <input 
        className="search" 
        type="search" 
        placeholder="Search..." 
        value={searchTerm}
        onChange={handleChange}
        />
        </form>
      </header>
      
    

   
        
    
    <div className="movie-container">

      {  movies && movies.map(movie => {
        {/* console.log() */}
        return (
        <>
          <Movie key={movie.id} data={movie} />
        </>
        )
      })}

      {/* { movies.length<1 &&  movies.map(movie => {
        return (
          <h1>no data found</h1>
        )
        }
      } */}

    
    </div>

    <ul className="next-page" >
      <li onClick={listClickHandler} id="1">1</li>
      <li onClick={listClickHandler} >2</li>
      <li onClick={listClickHandler} >3</li>
      <li>...</li>
      <li onClick={listClickHandler} >Next</li>
    </ul>

    </Router>

   

    </>
  );
}

export default App;
