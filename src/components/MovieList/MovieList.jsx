import { MovieListItem } from '../MovieListItem/MovieListItem';
import css from 'components/MovieList/MovieList.module.css';

export const MovieList = ({ movies, title }) => {
  return (
    <>
      <h3 className={css.Title}>{title}</h3>
      <ul className={css.MovieList}>
        {movies.map(movie => (
          <MovieListItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            name={movie.name}
            year={movie.release_date}
          />
        ))}
      </ul>
    </>
  );
};
