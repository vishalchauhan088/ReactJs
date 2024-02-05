import { useState} from 'react'

import MovieCard from './components/MovieCard';
import useSearch from './Hooks/useSearch';
import InputField from './components/InputField';
import { useEffect } from 'react';



function App() {

  const[movieName, setMovieName] = useState("");

  
    const {movieData, isLoading, error} = useSearch(movieName);
 
    console.log(movieData);
    console.log("error: "+error);
    console.log("isLoading: "+isLoading)
  
  
  
 function  handleOnChange(e){
    setMovieName(e.target.value);
  }

 

  if(isLoading){
    return (
      <h2>Loading..</h2>
    )
  }
  else if(error){
    return(
      <p>error in fetching Movie data</p>
    )
  }

  

  return (
    <>
      <div className="container">
        <InputField movieName={movieName} handleOnChange={handleOnChange}/>
      </div>


      {movieData.map((movie, index) => (
        <div key={index}>
          <h3>Title: {movie.Title}</h3>
          <p>Year: {movie.Year}</p>
          {/* Render other properties as needed */}
        </div>
      ))}
    </>

    
  )
}

export default App
