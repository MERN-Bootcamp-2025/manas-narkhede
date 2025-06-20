import React, { useState } from 'react';
import '../SearchFormApi.css'

const SearchForm = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={term}
        placeholder="Search character..."
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
