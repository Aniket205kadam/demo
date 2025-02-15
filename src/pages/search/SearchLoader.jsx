import React from 'react'

function SearchLoader() {
  return (
    <div className="skeleton-container">
        <div className="skeleton-profile"></div>
        <div className="skeleton-content">
            <div className="skeleton-title"></div>
            <div className="skeleton-text"></div>
        </div>
        <div className="skeleton-dot"></div>
    </div>
  )
}

export default SearchLoader;