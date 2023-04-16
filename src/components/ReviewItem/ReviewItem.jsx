import css from './ReviewItem.module.css';

export const ReviewItem = props => {
  const htmlreview = { __html: props.content };

  return (
    <div className={css.Review}>
      <p className={css.Author}>{props.author}</p>
      <p dangerouslySetInnerHTML={htmlreview}></p>
    </div>
  );
};
