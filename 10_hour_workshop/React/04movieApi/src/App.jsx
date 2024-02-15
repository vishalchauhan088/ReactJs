import { useState } from "react";

import MoviePoster from "./components/MoviePoster";
import useSearch from "./Hooks/useSearch";
import InputField from "./components/InputField";
import LoadingPage from "./components/LoadingPage"
import { useEffect } from "react";

function App() {
  const [movieName, setMovieName] = useState("batman");

  const [searchData, setSearchData] = useState("");

  const { movieData, isLoading, error } = useSearch(movieName);
  
  useEffect(()=>{console.log(movieData)},[movieData])

  console.log(movieData);
  console.log("error: " + error);
  console.log("isLoading: " + isLoading);

  function handleSubmit(event) {
    event.preventDefault(); 
    setMovieName(searchData);
  }
  

  function handleOnChange(e) {
    setSearchData(e.target.value);
  }

  // if (isLoading) {
  //   return <h2>Loading..</h2>;
  // } else if (error) {
  //   return <p>error in fetching Movie data</p>;
  // }



  return (
    <>
      <div className="mt-10">
        <InputField movieName={movieName} handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
      </div>

      {
        isLoading?(
          <LoadingPage />
        ):
        (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto mt-20">
            {movieData.map((movie, index) => (
              <MoviePoster title={movie.Title} poster={movie.Poster} type={movie.Type} year={movie.Year}/>
            ))}
          </div>
        )
      }

      
    </>
  );
}

export default App;
