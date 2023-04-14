import { Link } from 'react-router-dom';

export const MovieListItem = ({ id, title }) => {
  return (
    <li>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  );
};
