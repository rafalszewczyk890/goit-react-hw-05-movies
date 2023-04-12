import { Outlet, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const MovieDetailsPage = () => {
  const { movieId } = useParams();

  return (
    <>
      <div>MovieDetailsPage: {movieId}</div>
      <StyledNavLink to="cast">See cast</StyledNavLink>
      <StyledNavLink to="reviews">See reviews</StyledNavLink>
      <Outlet />
    </>
  );
};
