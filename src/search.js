import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Search({ searchResults, onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {searchResults.map((movie) => (
        <div key={movie.id}>
          <Link to={`http://www.omdbapi.com/?i=tt3896198&apikey=262443cd&Title=Vol. 2/${movie.id}`}>
            <img src={movie.poster} alt={movie.title} />
          </Link>
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Search;
