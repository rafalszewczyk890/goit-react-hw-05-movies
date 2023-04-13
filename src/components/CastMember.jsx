export const CastMember = props => {
  return (
    <li>
      <p>{props.name}</p>

      <img
        src={'https://image.tmdb.org/t/p/w300' + props.image}
        alt={props.name}
      ></img>
    </li>
  );
};
