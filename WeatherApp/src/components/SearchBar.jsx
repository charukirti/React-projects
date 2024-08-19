import searchIcon from "../assets/search.png";
export default function SearchBar({ inputRef, search }) {
  return (
    <div className="weather-app__search">
      <input
        type="text"
        className="weather-app__search-input"
        placeholder="Enter city name..."
        ref={inputRef}
      />
      <img
        src={searchIcon}
        alt="search-icon"
        className="weather-app__search-icon"
        onClick={() => search(inputRef.current.value)}
      />
    </div>
  );
}
