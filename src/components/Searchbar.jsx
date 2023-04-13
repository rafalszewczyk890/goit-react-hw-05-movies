export const Searchbar = ({ onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text"></input>
        <button type="submit">Search</button>
      </form>
    </>
  );
};


