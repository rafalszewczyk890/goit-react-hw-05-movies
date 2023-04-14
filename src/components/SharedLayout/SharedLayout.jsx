import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from 'components/SharedLayout/SharedLayout.module.css';

const StyledNavLink = styled(NavLink)`
  color: white;

  &.active {
    color: orange;
  }
`;

export const SharedLayout = () => {
  return (
    <>
      <nav className={css.Navigation}>
        <StyledNavLink className={css.NavButton} to="/">
          Home
        </StyledNavLink>
        <StyledNavLink className={css.NavButton} to="/movies">
          Movies
        </StyledNavLink>
      </nav>
      <Outlet />
    </>
  );
};
