import { Link } from 'react-router-dom';

export const TrendingMovieLink = ({ id, title }) => {
  return (
    <li>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  );
};
