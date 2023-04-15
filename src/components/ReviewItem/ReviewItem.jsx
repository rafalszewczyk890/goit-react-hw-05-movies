import css from './ReviewItem.module.css';

export const ReviewItem = props => {
  return (
    <div className={css.Review}>
      <p className={css.Author}>{props.author}</p>
      <p>{props.content}</p>
    </div>
  );
};
