import React from 'react';

export default function SearchOperator({ operator }) {
  return (
    <code className="search-term">{operator}</code>
  );
}
