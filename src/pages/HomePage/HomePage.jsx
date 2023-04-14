import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const HomePage = () => {
  const API_KEY = '3734bfd99a42268714d80d895f68afb5';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`trending/all/day?api_key=${API_KEY}`);
      console.log(response.data.results);
      setTrendingMovies(response.data.results);
    };
    fetch();
  }, []);

  return (
    <>
      <div>Homepage</div>
      <MovieList movies={trendingMovies} />
    </>
  );
};
