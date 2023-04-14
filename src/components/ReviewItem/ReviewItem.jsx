export const ReviewItem = props => {
  return (
    <li>
      <p>{props.author}</p>
      <p>{props.content}</p>
    </li>
  );
};
