import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'node_modules/react-router-dom';
import search from './search';
import Movielist from './Movielist';

function Task3() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=262443cd=${query}`);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <searchResults searchResults={search} onSearch={handleSearch} />
        </Route>
        <Route path="/movies/:id">
          <Movielist />
        </Route>
      </Switch>
    </Router>
  );
}
export default Task3;
