import css from './CastMember.module.css';

export const CastMember = props => {
  return (
    <li className={css.Container}>
      <p>{props.name}</p>

      {props.image ? (
        <img
          className={css.Image}
          src={'https://image.tmdb.org/t/p/w300' + props.image}
          alt={props.name}
        ></img>
      ) : (
        <img
          width="300"
          height="450"
          className={css.Image}
          src={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Missing_photo.svg/1200px-Missing_photo.svg.png'
          }
          alt={props.name}
        ></img>
      )}
    </li>
  );
};
