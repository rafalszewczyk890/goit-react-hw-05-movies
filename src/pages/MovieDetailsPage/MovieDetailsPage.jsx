import { Outlet, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

const StyledNavLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const API_KEY = '3734bfd99a42268714d80d895f68afb5';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

  useEffect(() => {
    const fetch = async () => {
      const response = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
        )
        .catch(error => {
          setError(error);
        });
      setMovie(response.data);
      console.log(response.data);
      console.log(error);
    };
    fetch();
  }, []);

  return (
    <>
      {error ? (
        <p>Movie not found</p>
      ) : (
        <>
          <div>MovieDetailsPage: {movieId}</div>
          <p>
            Title: {movie.title} {movie.code} (
            {new Date(movie.release_date).getFullYear()})
          </p>
          <img
            src={`https://image.tmdb.org/t/p/w300` + movie.poster_path}
            alt={movie.title}
          ></img>
          <p>User score: {movie.vote_average}</p>
          <h3>Overview</h3>
          <div>{movie.overview}</div>
          <h3>Genres</h3>

          <StyledNavLink to="cast">See cast</StyledNavLink>
          <StyledNavLink to="reviews">See reviews</StyledNavLink>
          <Outlet />
        </>
      )}
    </>
  );
};
