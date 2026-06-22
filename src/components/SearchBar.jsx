function SearchBar({ query, setQuery, disabled = false }) {
  return (
    <div className="p-5">
      <input
        disabled={disabled}
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        className="
          w-full
          p-3
          rounded-lg

          outline
          outline-black

          bg-white
          text-black

          dark:bg-zinc-800
          dark:text-white
        "
      />
    </div>
  );
}

export default SearchBar;