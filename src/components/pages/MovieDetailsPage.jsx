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
  const { movieId } = useParams();

  const API_KEY = '3734bfd99a42268714d80d895f68afb5';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
      );
      setMovie(response.data);
      console.log(response.data);
    };
    fetch();
  }, []);

  return (
    <>
      <div>MovieDetailsPage: {movieId}</div>
      <p>
        Title: {movie.title} ({new Date(movie.release_date).getFullYear()})
      </p>
      <img
        src={`https://image.tmdb.org/t/p/w300` + movie.poster_path}
        alt={movie.title}
      ></img>
      <p>User score: {movie.vote_average}</p>
      <h3>Overview</h3>
      <div>{movie.overview}</div>
      <h3>Genres</h3>
      <div>
        {movie.genres.map(genre => {
          return genre.name;
        })}
      </div>
      <StyledNavLink to="cast">See cast</StyledNavLink>
      <StyledNavLink to="reviews">See reviews</StyledNavLink>
      <Outlet />
    </>
  );
};
