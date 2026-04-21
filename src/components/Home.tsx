import { Link, useNavigate } from 'react-router-dom';
import { iaData } from '../data';
import { useState } from 'react';
import { Button } from './ui/Button';
import { ServiceIcon, IconName } from './ui/ServiceIcon';

export default function Home() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <>
      <div className="hero-section">
        <div className="container">
          <h1 className="hero-title">Access government services in one place</h1>
          <div className="search-container">
            <form onSubmit={handleSearch} className="search-input-wrapper">
              <input
                type="text" 
                className={`search-input ${isFocused ? 'focused' : ''}`}
                placeholder="Search for your services" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              />
              <button 
                type="submit" 
                className={`hero-search-btn ${(isFocused || query) ? 'visible' : ''}`}
                onMouseDown={(e) => e.preventDefault()}
              >
                Search
              </button>
            </form>

            <div className="search-suggestions">
              <h2 className="suggestions-title">HOW CAN WE HELP YOU?</h2>
              <div className="suggestions-list">
                {Object.entries(iaData)
                  .filter(([key]) => ['start-business', 'tax-compliance', 'get-funding'].includes(key))
                  .map(([key, category]) => (
                    <Button key={key} to={`/${key}`} variant="pill">
                      {category.title}
                    </Button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="page-header">
          {/* <h2 className="page-title">Welcome to Open Niger State</h2> */}
          <p className="page-description">A Niger state government initiative helping business owners and entrepreneurs access government services and resources in Niger state</p>
        </div>
        <div className="tier-list">
          {Object.entries(iaData).map(([key, category]) => (
            <div key={key} className="tier-item">
              <div className="tier-item-content">
                <Link to={`/${key}`}>
                  <ServiceIcon name={category.icon as IconName} />
                </Link>
                <div className="tier-item-text">
                  <Link to={`/${key}`} className="tier-item-link">{category.title}</Link>
                  <p className="tier-item-desc">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="feedback-box">
          <h3>Was this helpful?</h3>
          <p>Give us your feedback about this page.</p>
          <a href="#">Help us improve Open Niger State</a>
        </div>
      </div>
    </>
  );
}
