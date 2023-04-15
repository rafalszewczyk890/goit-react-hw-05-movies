import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage/HomePage';
import { MoviesPage } from '../../pages/MoviesPage/MoviesPage';
import { MovieDetailsPage } from '../../pages/MovieDetailsPage/MovieDetailsPage';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import { SharedLayout } from '../SharedLayout/SharedLayout';

export const App = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
