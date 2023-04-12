export const Trending = ({ trendingMovies }) => {
  return (
    <ul>
      {trendingMovies.map(trendingMovie => (
        <li key={trendingMovie.id}>{trendingMovie.title}</li>
      ))}
    </ul>
  );
};
