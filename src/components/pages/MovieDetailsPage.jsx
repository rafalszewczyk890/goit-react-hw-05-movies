import { Link, Outlet } from 'react-router-dom';

export const MovieDetailsPage = () => {
  return (
    <>
      <div>MovieDetailsPage</div>
      <Link to="cast">See cast</Link>
      <Link to="reviews">See reviews</Link>
      <Outlet />
    </>
  );
};
