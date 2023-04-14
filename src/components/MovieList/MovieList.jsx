import { MovieListItem } from '../MovieListItem/MovieListItem';
import css from 'components/MovieList/MovieList.module.css';

export const MovieList = ({ movies }) => {
  return (
    <>
      <h3 className={css.Title}>Trending today</h3>
      <ul className={css.MovieList}>
        {movies.map(movie => (
          <MovieListItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            name={movie.name}
          />
        ))}
      </ul>
    </>
  );
};
