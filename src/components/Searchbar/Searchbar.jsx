import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  return (
    <div className={css.Module}>
      <form className={css.Container} onSubmit={onSubmit}>
        <input className={css.Input} type="text"></input>
        <button className={css.Button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
