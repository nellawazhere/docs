import React, { useCallback } from 'react';
import { useHistory } from '@docusaurus/router';
import styles from './styles.module.css';

export default function LandingPageSearch() {
  const history = useHistory();

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value.trim();

    if (!searchQuery || searchQuery.length < 3) {
      alert('Please enter at least 3 characters to search.');
      return;
    }
    //console.log added to verify the URL being redirected to search results not search
    console.log(`Redirecting to: /search-results/?q=${encodeURIComponent(searchQuery)}`);
    history.push(`/search-results/?q=${encodeURIComponent(searchQuery)}`);
  }, [history]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const form = e.target.closest('form');
      if (form) {
        form.submit(); // Use the native `submit` method
      }
    }
  }, []);

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="search"
          name="search"
          placeholder="Search documentation..."
          className={styles.searchInput}
          onKeyPress={handleKeyPress}
          aria-label="Search documentation"
        />
        <button type="submit" className={styles.searchButton} aria-label="Search">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}