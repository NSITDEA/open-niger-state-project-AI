import { useParams, Link } from 'react-router-dom';
import { iaData } from '../data';

export default function Category() {
  const { catKey, subKey } = useParams<{ catKey: string; subKey?: string }>();
  
  if (!catKey || !iaData[catKey]) {
    return (
      <div className="page-header">
        <h1 className="page-title">Category Not Found</h1>
      </div>
    );
  }

  const category = iaData[catKey];

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">{category.title}</h1>
        <p className="page-description">{category.description}</p>
      </div>
      
      <div className="tier-list">
        {Object.entries(category.children).map(([subK, subCategory]) => {
          // If a subKey is requested, only show that subCategory (Tier 3 standalone), otherwise show all.
          if (subKey && subK !== subKey) return null;

          return (
            <div key={subK} className="tier-item tier-item-level2">
              <h2>{subCategory.title}</h2>
              <div className="level3-links">
                {Object.entries(subCategory.children).map(([articleKey, article]) => (
                  <div key={articleKey}>
                    <Link 
                      to={`/${catKey}/${subK}/${articleKey}`} 
                      className="tier-item-link"
                    >
                      {article.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
