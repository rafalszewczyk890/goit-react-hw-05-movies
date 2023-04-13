import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ReviewItem } from './ReviewItem';
import axios from 'axios';

export const Reviews = () => {
  const API_KEY = '3734bfd99a42268714d80d895f68afb5';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
      );
      setReviews(response.data.results);
      console.log(response.data.results);
    };
    fetch();
  }, []);

  return (
    <div>
      <ul>
        {reviews.map(review => (
          <ReviewItem
            key={review.id}
            author={review.author}
            content={review.content}
          />
        ))}
      </ul>
    </div>
  );
};
