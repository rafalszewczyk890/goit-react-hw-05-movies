import { Searchbar } from 'components/Searchbar/Searchbar';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const MoviesPage = () => {
  const API_KEY = '3734bfd99a42268714d80d895f68afb5';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState([]);

  const navigate = useNavigate();
  const query = searchParams.get('query');

  useEffect(() => {}, []);

  const handleSubmit = async event => {
    event.preventDefault();
    navigate(`?query=${event.target[0].value}`);
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    );
    setFoundMovies(response.data.results);
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <div>MoviesPage</div>

      {foundMovies.length > 1 && <MovieList movies={foundMovies} />}
    </>
  );
};
