import { Link } from 'react-router-dom';
import css from 'components/MovieListItem/MovieListItem.module.css';

export const MovieListItem = ({ id, title, name }) => {
  return (
    <li className={css.MovieTitle}>
      <Link className={css.MovieLink} to={`/movies/${id}`}>
        {title}
        {name}
      </Link>
    </li>
  );
};
