import { Searchbar } from 'components/Searchbar';
import { useNavigate } from 'react-router-dom';

export const MoviesPage = () => {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target[0].value);
    navigate(`?query=${event.target[0].value}`);
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <div>MoviesPage</div>
    </>
  );
};
