import {
  Outlet,
  NavLink,
  useLocation,
  useParams,
  Link,
} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import css from './MovieDetailsPage.module.css';

const StyledNavLink = styled(NavLink)`
  color: #e9c46a;
  &.active {
    color: #f4a261;
  }
`;

export const MovieDetailsPage = () => {
  const location = useLocation();
  console.log(location.state);

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
    };
    fetch();
  }, []);

  return (
    <>
      {error ? (
        <p>Movie not found</p>
      ) : (
        <div className={css.DetailsContainer}>
          <Link className={css.BackButton} to={location.state.from}>
            Go back
          </Link>
          <p className={css.MovieTitle}>
            {movie.title} {movie.code} (
            {new Date(movie.release_date).getFullYear()})
          </p>
          <img
            className={css.Image}
            src={`https://image.tmdb.org/t/p/w300` + movie.poster_path}
            alt={movie.title}
          ></img>
          <div className={css.MovieInfo}>
            <h3>User score: {movie.vote_average}</h3>
            <div>
              <h3>Overview</h3>
              <div>{movie.overview}</div>
            </div>
          </div>

          <div className={css.Navigate}>
            <StyledNavLink
              className={css.Button}
              to="cast"
              state={{ from: '/movies' }}
            >
              See cast
            </StyledNavLink>
            <StyledNavLink
              className={css.Button}
              to="reviews"
              state={{ from: '/movies' }}
            >
              See reviews
            </StyledNavLink>
          </div>
          <Outlet />
        </div>
      )}
    </>
  );
};
