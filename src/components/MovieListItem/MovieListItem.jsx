import { Link } from 'react-router-dom';
import css from 'components/MovieListItem/MovieListItem.module.css';

export const MovieListItem = ({ id, title, name, year }) => {
  return (
    <li className={css.MovieTitle}>
      <Link className={css.MovieLink} to={`/movies/${id}`}>
        {title} ({year.slice(0, 4)})
      </Link>
    </li>
  );
};
