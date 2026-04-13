import { useSearchParams, Link } from 'react-router-dom';
import { iaData } from '../data';
import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ResultItem {
  title: string;
  path: string;
  description: string;
  category: string;
}

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<ResultItem[]>([]);
  const [localQuery, setLocalQuery] = useState(query);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const matchedResults: ResultItem[] = [];

    // Search Tier 2 and Tier 3/4
    Object.entries(iaData).forEach(([catKey, category]) => {
      // Check Tier 2
      if (category.title.toLowerCase().includes(query.toLowerCase()) || 
          category.description.toLowerCase().includes(query.toLowerCase())) {
        matchedResults.push({
          title: category.title,
          path: `/${catKey}`,
          description: category.description,
          category: 'Service Category'
        });
      }

      // Check Tier 3 & 4
      Object.entries(category.children).forEach(([subKey, subCategory]) => {
        if (subCategory.title.toLowerCase().includes(query.toLowerCase())) {
          matchedResults.push({
            title: subCategory.title,
            path: `/${catKey}/${subKey}`,
            description: `Part of ${category.title}`,
            category: category.title
          });
        }

        Object.entries(subCategory.children).forEach(([artKey, article]) => {
          if (article.title.toLowerCase().includes(query.toLowerCase())) {
             matchedResults.push({
                title: article.title,
                path: `/${catKey}/${subKey}/${artKey}`,
                description: `Information and guidance on ${article.title} within ${subCategory.title}.`,
                category: subCategory.title
             });
          }
        });
      });
    });

    setResults(matchedResults);
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (localQuery.trim()) {
      setSearchParams({ q: localQuery });
    }
  };

  return (
    <div className="container" style={{ paddingTop: '40px' }}>
      <div className="search-results-header">
        <form onSubmit={handleSearch} className="search-input-wrapper" style={{ maxWidth: '800px', marginBottom: '40px' }}>
          <input 
            type="text" 
            className="search-input results-page-input" 
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            placeholder="Search for your services" 
          />
          <button type="submit" className="search-page-btn">
            Search
          </button>
        </form>

        <h1 className="results-count-title">
          {results.length} search results for “{query}” were found
        </h1>
      </div>

      <div className="search-results-list">
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className="search-result-item">
              <span className="result-category-label">{result.category}</span>
              <Link to={result.path} className="result-item-title">
                {result.title}
              </Link>
              <p className="result-item-description">{result.description}</p>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No results found for your search. Please check your spelling or try a broader term.</p>
          </div>
        )}
      </div>
    </div>
  );
}
