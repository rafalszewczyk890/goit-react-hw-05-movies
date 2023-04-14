import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CastMember } from '../CastMember/CastMember';
import axios from 'axios';

export const Cast = () => {
  const API_KEY = '3734bfd99a42268714d80d895f68afb5';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
      );
      setCast(response.data.cast);
      console.log(response.data.cast);
    };
    fetch();
  }, []);
  return (
    <div>
      {cast.map(actor => (
        <CastMember
          key={actor.id}
          name={actor.name}
          image={actor.profile_path}
        />
      ))}
    </div>
  );
};
