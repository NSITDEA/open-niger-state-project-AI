import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Category from './components/Category';
import Article from './components/Article';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<SearchResults />} />
        <Route path=":catKey" element={<Category />} />
        <Route path=":catKey/:subKey" element={<Category />} />
        <Route path=":catKey/:subKey/:articleKey" element={<Article />} />
        <Route path="*" element={
          <div className="page-header">
            <h1 className="page-title">Page Not Found</h1>
            <p className="page-description">The requested page could not be found.</p>
          </div>
        } />
      </Route>
    </Routes>
  );
}

export default App;
