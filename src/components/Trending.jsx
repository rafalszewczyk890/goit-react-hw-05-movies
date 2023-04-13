import { TrendingMovieLink } from './TrendingMovieLink';

export const Trending = ({ trendingMovies }) => {
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(trendingMovie => (
          <TrendingMovieLink
            key={trendingMovie.id}
            id={trendingMovie.id}
            title={trendingMovie.title}
          />
        ))}
      </ul>
    </>
  );
};
