import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { iaData, ServiceArticle, GuidanceArticle, ListingArticle, DirectoryArticle } from '../data';
import { Clock, Eye, CheckCircle2, ChevronDown, ArrowRight, AlertTriangle, Building2, Phone, Mail, Globe, MapPin, Users, ExternalLink } from 'lucide-react';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

export default function Article() {
  const { catKey, subKey, articleKey } = useParams<{ catKey: string; subKey: string; articleKey: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Scroll to top on mount or article change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleKey]);

  if (!catKey || !subKey || !articleKey || !iaData[catKey] || !iaData[catKey].children[subKey] || !iaData[catKey].children[subKey].children[articleKey]) {
    return (
      <div className="page-header">
        <h1 className="page-title">Article Not Found</h1>
      </div>
    );
  }

  const category = iaData[catKey];
  const subCategory = category.children[subKey];
  const article = subCategory.children[articleKey];

  // Logic to find related articles in the same sub-category
  const relatedArticles = Object.entries(subCategory.children)
    .filter(([key]) => key !== articleKey)
    .slice(0, 3)
    .map(([key, data]) => ({
      key,
      title: data.title,
      path: `/${catKey}/${subKey}/${key}`
    }));

  const renderRelated = () => {
    if (relatedArticles.length === 0) return null;
    return (
      <div className="related-section">
        <h3>Related articles</h3>
        <div className="related-grid">
          {relatedArticles.map((rel) => (
            <Link key={rel.key} to={rel.path} className="related-card">
              <h4>{rel.title}</h4>
              <span className="related-link">
                Read article <ArrowRight size={18} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  // Render Listing Layout
  if (article.type === 'listing') {
    const l = article as ListingArticle;
    return (
      <div className="container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="page-header">
          <h1 className="page-title">{l.title}</h1>
          <p className="page-description" style={{ fontSize: '1.25rem', color: '#4B5563', maxWidth: '800px' }}>
            {l.description}
          </p>
        </div>

        {l.warning && (
          <div className="warning-box">
            <div className="warning-icon-wrapper">
              <AlertTriangle className="warning-icon" size={24} />
            </div>
            <div className="warning-content">
              <p>{l.warning}</p>
            </div>
          </div>
        )}

        <div className="listing-section">
          <h2 className="section-title">Grants open right now</h2>
          <div className="listing-grid">
            {l.items.map((item, i) => (
              <div key={i} className="listing-card">
                <div className="listing-card-header">
                  <Badge variant="accent" className="status-badge">{item.status}</Badge>
                  <h3 className="listing-card-title">{item.title}</h3>
                  <div className="listing-card-issuer">
                    <Building2 size={16} />
                    <span>{item.issuer}</span>
                  </div>
                </div>
                <div className="listing-card-body">
                  <div className="listing-detail-item">
                    <div className="detail-label">Amount:</div>
                    <div className="detail-value highlight">{item.amount}</div>
                  </div>
                  <div className="listing-detail-item">
                    <div className="detail-label">Who can apply:</div>
                    <div className="detail-value">{item.eligibility}</div>
                  </div>
                  <div className="listing-card-footer">
                    <Button variant="primary" to={item.link}>
                      How to apply
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {renderRelated()}
      </div>
    );
  }

  // Render Guidance Layout
  if (article.type === 'guidance') {
    const g = article as GuidanceArticle;
    return (
      <div className="container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="page-header">
          <h1 className="page-title">{g.title}</h1>
          <p className="page-description" style={{ fontSize: '1.25rem', color: '#4B5563', maxWidth: '800px' }}>
            {g.description}
          </p>
        </div>

        <div className="guidance-container">
          <table className="guidance-table">
            <thead>
              <tr>
                <th>Your situation</th>
                <th>What to do</th>
              </tr>
            </thead>
            <tbody>
              {g.rows.map((row, i) => (
                <tr key={i}>
                  <td>{row.situation}</td>
                  <td>
                    {row.action.map((part, pi) => (
                      <span key={pi}>
                        {part.link ? (
                          <Link to={part.link} className="recommendation-link">
                            {part.text}
                          </Link>
                        ) : (
                          <span>{part.text}</span>
                        )}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {renderRelated()}
      </div>
    );
  }

  // Render Directory Layout
  if (article.type === 'directory') {
    const d = article as DirectoryArticle;
    return (
      <div className="container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="page-header">
          <h1 className="page-title">{d.title}</h1>
          <p className="page-description" style={{ fontSize: '1.25rem', color: '#4B5563', maxWidth: '800px' }}>
            {d.description}
          </p>
        </div>

        <div className="directory-list">
          {d.items.map((item, i) => (
            <div key={i} className="directory-item-card">
              <div className="directory-item-header">
                <div className="directory-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="directory-item-main-info">
                  <h2 className="directory-item-name">{item.name}</h2>
                  <p className="directory-item-description">{item.description}</p>
                </div>
              </div>

              <div className="directory-item-content">
                <div className="directory-excos-section">
                  <h3 className="sub-section-title">
                    <Users size={20} />
                    Leadership & Excos
                  </h3>
                  <div className="exco-grid">
                    {item.excos.map((exco, ei) => (
                      <div key={ei} className="exco-card">
                        <div className="exco-avatar">
                          <img src={exco.image} alt={exco.name} />
                        </div>
                        <div className="exco-info">
                          <div className="exco-role">{exco.role}</div>
                          <div className="exco-name">{exco.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="directory-contact-section">
                  <h3 className="sub-section-title">
                    <Phone size={20} />
                    Contact Information
                  </h3>
                  <div className="contact-details">
                    {item.contact.address && (
                      <div className="contact-item">
                        <MapPin size={18} />
                        <span>{item.contact.address}</span>
                      </div>
                    )}
                    {item.contact.phone && (
                      <div className="contact-item">
                        <Phone size={18} />
                        <a href={`tel:${item.contact.phone}`}>{item.contact.phone}</a>
                      </div>
                    )}
                    {item.contact.email && (
                      <div className="contact-item">
                        <Mail size={18} />
                        <a href={`mailto:${item.contact.email}`}>{item.contact.email}</a>
                      </div>
                    )}
                    {item.contact.website && (
                      <div className="contact-item">
                        <Globe size={18} />
                        <a href={item.contact.website} target="_blank" rel="noopener noreferrer">
                          Visit Website <ExternalLink size={14} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {renderRelated()}
      </div>
    );
  }

  // Render Service Layout
  if (article.type === 'service') {
    const s = article as ServiceArticle;
    return (
      <div className="service-layout">
        <div className="service-hero">
          <div className="container">
            <h1>{s.title}</h1>
            <div className="service-meta">
              <div className="service-meta-item">
                <Clock size={20} />
                <span>{s.readTime}</span>
              </div>
              <div className="service-meta-item">
                <Eye size={20} />
                <span>{s.views}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="service-content-wrapper">
          <div className="container">
            <div className="service-card">
              <h2 className="section-accent-title">About This Service</h2>
              <p className="service-description">{s.about}</p>

              <div className="benefits-box">
                <h3>What you get</h3>
                <div className="benefit-list">
                  {s.benefits.map((benefit, i) => (
                    <div key={i} className="benefit-item">
                      <CheckCircle2 size={24} className="benefit-icon" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="requirements-box">
                <h3>What you need to bring</h3>
                <div className="requirement-list">
                  {s.requirements.map((req, i) => (
                    <div key={i} className="requirement-item">
                      <span className="req-bullet">•</span>
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="process-section">
                <h3>How to do it</h3>
                <div className="steps-list">
                  {s.steps.map((step, i) => (
                    <div key={i} className="step-item">
                      <div className="step-number">
                        <span className="step-number-inner">{i + 1}</span>
                      </div>
                      <div className="step-content">
                        <h4>{step.title}</h4>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="faq-section">
                <h3>People also ask</h3>
                <div className="faq-list">
                  {s.faq.map((item, i) => (
                    <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                      <button 
                        className="faq-question" 
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      >
                        {item.question}
                        <ChevronDown size={24} className="faq-icon" />
                      </button>
                      {openFaq === i && (
                        <div className="faq-answer">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="cta-section">
                <a href={s.cta.link} target="_blank" rel="noopener noreferrer" className="service-cta-btn">
                  {s.cta.text}
                </a>
                <span className="cta-note">{s.cta.note}</span>
              </div>

              {renderRelated()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback Standard Layout
  return (
    <div className="container" style={{ paddingTop: '40px' }}>
      <div className="page-header">
        <h1 className="page-title">{article.title}</h1>
        <p className="page-description">Guidance and detailed information for {category.title} in Niger State.</p>
      </div>
      
      <div className="detail-content">
        <p>Information about {article.title} is currently being updated. Please check back soon or use the search bar to find related guidance.</p>
      </div>

      <div style={{ paddingBottom: '60px' }}>
        {renderRelated()}
      </div>
    </div>
  );
}
