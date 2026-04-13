import { Outlet, Link, useLocation } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { iaData } from '../data';
import logo from '../assets/logo.png';

export default function Layout() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const renderBreadcrumbs = () => {
    if (pathSegments.length === 0) return null;

    let currentPath = '';
    const breadcrumbs = [];
    
    
    let currentNode: any = iaData;

    for (let i = 0; i < pathSegments.length; i++) {
        const seg = pathSegments[i];
        currentPath += '/' + seg;
        
        if (i === 0 && currentNode[seg]) {
            breadcrumbs.push({ title: currentNode[seg].title, path: currentPath });
            currentNode = currentNode[seg].children;
        } else if (i > 0 && currentNode && currentNode[seg]) {
            breadcrumbs.push({ title: currentNode[seg].title, path: currentPath });
            if (currentNode[seg].children) {
                currentNode = currentNode[seg].children;
            }
        }
    }

    return (
      <nav className="breadcrumbs" aria-label="breadcrumb">
        <Link to="/">Home</Link>
        {breadcrumbs.map((crumb, index) => (
          <span key={crumb.path}>
            <span className="breadcrumb-separator">{'>'}</span>
            {index === breadcrumbs.length - 1 ? (
              <span className="breadcrumb-current">{crumb.title}</span>
            ) : (
              <Link to={crumb.path}>{crumb.title}</Link>
            )}
          </span>
        ))}
      </nav>
    );
  };

  return (
    <>
      <div className="notice-banner">
        <span><AlertCircle size={16} /> Note we will not ask you for any Payment!</span>
      </div>
      
      <header className="main-header">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo">
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="Open Niger State Logo" className="logo-img" />
            </Link>
          </div>
          <nav className="main-nav">
            <Link to="/">Services</Link>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <div className="app-content">
        <div className="container">
          {renderBreadcrumbs()}
        </div>
        <main>
          <Outlet />
        </main>
      </div>

      <footer className="main-footer" id="contact">
        <div className="container footer-content">
          <div className="footer-logo">
            <Link to="/">
              <img src={logo} alt="Open Niger State Logo" className="logo-img footer-logo-img" />
            </Link>
          </div>
          
          <p className="footer-description">
            Empowering small and medium enterprises in Niger State with access to funding, training, resources, and business support.
          </p>

          <div className="footer-links">
            <div className="link-col">
              <Link to="/">Home</Link>
              <a href="#">Suggestions</a>
            </div>
            <div className="link-col">
              <Link to="/">Our Services</Link>
              <a href="#contact" className="text-yellow">Contact Us</a>
            </div>
          </div>

          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>

          <div className="footer-bottom">
            &copy; 2026 Niger State Government. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
