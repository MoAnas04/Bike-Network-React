import "./search.styles.css";

const SearchBar = ({ value, onChange, onClick }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={value}
        placeholder="Search by City"
        onChange={onChange}
      />
      <button onClick={onClick}>Search</button>
    </div>
  );
};

export default SearchBar;
