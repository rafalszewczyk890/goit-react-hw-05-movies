import css from './CastMember.module.css'

export const CastMember = props => {
  return (
    <li className={ css.Container}>
      <p>{props.name}</p>

      <img className={css.Image }
        src={'https://image.tmdb.org/t/p/w300' + props.image}
        alt={props.name}
      ></img>
    </li>
  );
};
