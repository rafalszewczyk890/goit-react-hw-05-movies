import { Searchbar } from 'components/Searchbar/Searchbar';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
import { useState } from 'react';
import axios from 'axios';

export const MoviesPage = () => {
  const API_KEY = '3734bfd99a42268714d80d895f68afb5';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState([]);

  const query = searchParams.get('query');

  console.log(query);
  const navigate = useNavigate();

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
      <p>Searching for: {query}</p>
      <MovieList movies={foundMovies} />
    </>
  );
};
