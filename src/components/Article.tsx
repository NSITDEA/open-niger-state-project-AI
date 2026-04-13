import { useParams } from 'react-router-dom';
import { iaData } from '../data';

export default function Article() {
  const { catKey, subKey, articleKey } = useParams<{ catKey: string; subKey: string; articleKey: string }>();

  if (!catKey || !subKey || !articleKey || !iaData[catKey] || !iaData[catKey].children[subKey] || !iaData[catKey].children[subKey].children[articleKey]) {
    return (
      <div className="page-header">
        <h1 className="page-title">Article Not Found</h1>
      </div>
    );
  }

  const category = iaData[catKey];
  const article = category.children[subKey].children[articleKey];

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">{article.title}</h1>
        <p className="page-description">Guidance and detailed information for {category.title} in Niger State.</p>
      </div>
      
      <div className="detail-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        <h3>Requirements</h3>
        <ul>
            <li>Valid Identification (NIN, Drivers License)</li>
            <li>Proof of Address in Niger State</li>
            <li>Payment of Processing Fee</li>
        </ul>
        
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </div>
    </div>
  );
}
