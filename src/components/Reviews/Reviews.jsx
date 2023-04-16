import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import css from './Reviews.module.css';
import axios from 'axios';

const Reviews = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // test
  }, []);

  if (reviews.length > 0) {
    return (
      <div>
        <div className={css.ReviewList}>
          {reviews.map(review => (
            <ReviewItem
              key={review.id}
              author={review.author}
              content={review.content}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <div className={css.NoReview}>No reviews for this movie</div>;
  }
};

export default Reviews;
