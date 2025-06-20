import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import PhotoGrid from './PhotoGrid';

const CharacterSearch = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // ✅ Load all characters on initial render
  useEffect(() => {
    fetchCharacters('https://rickandmortyapi.com/api/character');
  }, []);

  const fetchCharacters = async (url, append = false) => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('No characters found!');
      const data = await response.json();

      if (!data.results || data.results.length === 0) {
        setCharacters([]);
        throw new Error('No characters found!');
      }

      setCharacters((prev) =>
        append ? [...prev, ...data.results] : data.results
      );
      setNextPageUrl(data.info.next);
    } catch (err) {
      setCharacters([]); // ✅ Clear previous characters
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (term) => {
    if (!term.trim()) {
      setError('Please enter a character name.');
      fetchCharacters(`https://rickandmortyapi.com/api/character/`)
      return;
    }
    setSearchTerm(term);
    setCharacters([]); 
    fetchCharacters(`https://rickandmortyapi.com/api/character/?name=${term}`);
  
  };

  const loadAllCharacters = () => {
    setSearchTerm('');
    setCharacters([]); // ✅ Reset characters
    fetchCharacters('https://rickandmortyapi.com/api/character');
  };

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <hr />
      <SearchForm onSearch={handleSearch} />
      {/* <button onClick={loadAllCharacters}>Load All Characters</button> */}

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      
      {/* ✅ Only render if characters exist */}
      {characters.length > 0 && <PhotoGrid characters={characters} />}

      {nextPageUrl && !loading && characters.length > 0 && (
        <button
          className="load-button"
          onClick={() => fetchCharacters(nextPageUrl, true)}
        >
          View More
        </button>
      )}
    </div>
  );
};

export default CharacterSearch;
