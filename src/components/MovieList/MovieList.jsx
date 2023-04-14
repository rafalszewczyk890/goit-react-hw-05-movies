import { MovieListItem } from '../MovieListItem/MovieListItem';

export const MovieList = ({ movies }) => {
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <MovieListItem key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </ul>
    </>
  );
};
