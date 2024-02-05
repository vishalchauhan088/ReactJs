import 'dotenv/config';
import { useState, useEffect } from 'react';



const useSearch = (movieName) => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(process.env);

  useEffect(() => {
    // Only make the API call if movieName is truthy
    if (movieName) {
      const fetchMovie = async () => {
        try {
            const apikey = process.env.REACT_APP_API_KEY || '90f01bb6';
          const response = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${movieName}`);
          const data = await response.json();
          setMovieData(data.Search || []);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchMovie();
    } else {
      // Set default state when movieName is empty or undefined
      setMovieData([]);
      setIsLoading(false);
      setError(null);
    }

  }, [movieName]);

  return { movieData, isLoading, error };
};

export default useSearch;  