import React from 'react';
import './styleSearchBar.css'

const SearchBar = ({value, handleSearchKey, clearSearch, formSubmit}) => (
    <div className='searchBar-wrapper'>
      <form onSubmit={formSubmit}>
        <input 
        type='text'
        onChange={handleSearchKey} 
        placeholder='Type instrument category' 
        value={value}
        />
        {value && <span onClick={clearSearch}>X</span>}

        <button>Find instrument</button>
      </form>
    </div>
  );

export default SearchBar
