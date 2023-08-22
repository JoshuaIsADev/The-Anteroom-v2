import { useState } from 'react';

function GoogleSearch() {
  const [query, setQuery] = useState('');
  return (
    <div>
      <h2>Google</h2>
      <input
        className='search'
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default GoogleSearch;
