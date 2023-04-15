import { Link, useLocation } from 'react-router-dom';
import css from 'components/MovieListItem/MovieListItem.module.css';

export const MovieListItem = ({ id, title, year }) => {
  const location = useLocation();

  return (
    <li className={css.MovieTitle}>
      <Link
        className={css.MovieLink}
        to={`/movies/${id}`}
        state={location.pathname === '/' ? { from: '/' } : { from: '/movies' }}
      >
        {title} ({year.slice(0, 4)})
      </Link>
    </li>
  );
};
