import { Searchbar } from 'components/Searchbar/Searchbar';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import css from './MoviesPage.module.css';
import axios from 'axios';

const MoviesPage = () => {
  const API_KEY = '3734bfd99a42268714d80d895f68afb5';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState([]);

  const query = searchParams.get('query');

  const handleSubmit = async event => {
    event.preventDefault();
    setSearchParams({ query: event.target[0].value });
    event.target[0].value = '';
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
      );
      setFoundMovies(response.data.results);
    };
    if (query !== null) {
      fetch();
    }
  }, [query]);

  return (
    <>
      <div className={css.Title}>Search movies!</div>
      <Searchbar onSubmit={handleSubmit} />

      {foundMovies.length > 0 && (
        <MovieList movies={foundMovies} title={'Search results'} />
      )}
    </>
  );
};

export default MoviesPage;
