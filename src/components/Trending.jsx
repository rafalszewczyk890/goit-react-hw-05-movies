import { TrendingMovieLink } from './TrendingMovieLink';

export const Trending = ({ trendingMovies }) => {
  return (
    <ul>
      {trendingMovies.map(trendingMovie => (
        <TrendingMovieLink id={trendingMovie.id} title={trendingMovie.title} />
      ))}
    </ul>
  );
};
