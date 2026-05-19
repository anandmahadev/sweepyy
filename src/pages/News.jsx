import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import { Link } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';

const News = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 3;

  const posts = [
    { id: 1, title: 'SCA Acquires Leading Power Sweeping Company in Florida', date: 'May 12, 2024', category: 'Company News', excerpt: 'Strategic expansion continues in the Southeast region with the acquisition of Gulf Coast Sweeping...', image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=400' },
    { id: 2, title: 'The Importance of Spring Street Sweeping for Stormwater Management', date: 'April 28, 2024', category: 'Industry Insights', excerpt: 'How municipal sweeping programs prevent pollutants from entering our waterways during spring rain events...', image: 'https://images.unsplash.com/photo-1590486803833-ffc6f9861b3c?auto=format&fit=crop&q=80&w=400' },
    { id: 3, title: 'SCA Celebrates Earth Day with Environmental Clean-up Initiatives', date: 'April 22, 2024', category: 'Sustainability', excerpt: 'Highlighting our commitment to environmental responsibility through nationwide community service projects...', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400' },
    { id: 4, title: 'New Technology Implementation Across SCA Fleet', date: 'March 15, 2024', category: 'Innovation', excerpt: 'Introducing real-time tracking and debris analysis technology to improve service efficiency for our clients...', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400' },
    { id: 5, title: 'SCA Hiring Event: Joining the Nation’s Largest Sweeping Fleet', date: 'March 02, 2024', category: 'Careers', excerpt: 'We are looking for operators, mechanics, and driver helpers across all 21 states of operation...', image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=400' },
    { id: 6, title: 'Supporting Municipalities with Emergency JetVac Services', date: 'February 18, 2024', category: 'Service Spotlight', excerpt: 'How SCA responded to recent flooding events with rapid-deployment sewer cleaning solutions...', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
  ];

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    if (query) {
      setSelectedCategory('');
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? post.category.toLowerCase() === selectedCategory.toLowerCase() : true;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="news-page">
      <PageHero title="News & Insights" />
      
      <section className="section-padding">
        <div className="container news-layout">
          <div className="news-main">
            <div className="news-grid-full">
              {currentPosts.length > 0 ? (
                currentPosts.map((post) => (
                  <div key={post.id} className="blog-card">
                    <div className="blog-img">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="blog-category">{post.category}</span>
                        <span className="blog-date">{post.date}</span>
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <Link to="/news" className="read-more">Read More <ChevronRight size={16} /></Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-posts">
                  <p>No news posts available at this time. Please check back later.</p>
                </div>
              )}
            </div>
            
            {totalPages > 1 && (
              <div className="pagination">
                <button 
                  className="page-btn" 
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                  <button 
                    key={pageNum}
                    className={`page-btn ${currentPage === pageNum ? 'active' : ''}`}
                    onClick={() => setCurrentPage(pageNum)}
                  >
                    {pageNum}
                  </button>
                ))}
                <button 
                  className="page-btn" 
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </div>

          <aside className="news-sidebar">
            <div className="sidebar-widget">
              <h4>Search</h4>
              <div className="search-box">
                <input 
                  type="text" 
                  placeholder="Search news..." 
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                />
                {searchQuery && (
                  <button 
                    onClick={() => handleSearchChange('')} 
                    style={{ background: 'transparent', color: '#999', border: 'none', outline: 'none', cursor: 'pointer', fontSize: '18px', marginRight: '5px' }}
                    type="button"
                  >
                    ×
                  </button>
                )}
                <button><Search size={18} /></button>
              </div>
            </div>

            <div className="sidebar-widget">
              <h4>Categories</h4>
              <ul className="category-list">
                <li>
                  <a 
                    href="#categories" 
                    onClick={(e) => { e.preventDefault(); handleCategorySelect(''); }}
                    className={selectedCategory === '' ? 'active' : ''}
                  >
                    All Categories <span>({posts.length})</span>
                  </a>
                </li>
                {[
                  { name: 'Company News' },
                  { name: 'Industry Insights' },
                  { name: 'Sustainability' },
                  { name: 'Innovation' },
                  { name: 'Careers' },
                  { name: 'Service Spotlight' }
                ].map(cat => {
                  const count = posts.filter(p => p.category.toLowerCase() === cat.name.toLowerCase()).length;
                  return (
                    <li key={cat.name}>
                      <a 
                        href="#categories" 
                        onClick={(e) => { e.preventDefault(); handleCategorySelect(selectedCategory === cat.name ? '' : cat.name); }}
                        className={selectedCategory === cat.name ? 'active' : ''}
                      >
                        {cat.name} <span>({count})</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="sidebar-widget">
              <h4>Recent Posts</h4>
              <ul className="recent-posts">
                {posts.slice(0, 3).map(post => (
                  <li key={post.id}>
                    <Link to="/news">{post.title}</Link>
                    <span className="recent-date">{post.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <style jsx>{`
        .news-layout {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 60px;
        }

        .news-grid-full {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 50px;
        }

        .blog-card {
          background: white;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: var(--box-shadow);
          transition: var(--transition-smooth);
        }

        .blog-card:hover {
          transform: translateY(-5px);
        }

        .blog-img img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .blog-content {
          padding: 25px;
        }

        .blog-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .blog-category {
          color: var(--accent-orange);
        }

        .blog-date {
          color: var(--medium-gray);
        }

        .blog-content h3 {
          font-size: 18px;
          margin-bottom: 15px;
          line-height: 1.4;
        }

        .blog-content p {
          font-size: 14px;
          color: var(--medium-gray);
          margin-bottom: 20px;
        }

        .read-more {
          display: flex;
          align-items: center;
          gap: 5px;
          color: var(--primary-blue);
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
        }

        .read-more:hover {
          color: var(--accent-orange);
        }

        .pagination {
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .page-btn {
          width: 40px;
          height: 40px;
          border: 1px solid var(--border-gray);
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          font-weight: 700;
        }

        .page-btn.active {
          background: var(--primary-blue);
          color: white;
          border-color: var(--primary-blue);
        }

        .sidebar-widget {
          margin-bottom: 40px;
        }

        .sidebar-widget h4 {
          font-size: 18px;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid var(--accent-orange);
          display: inline-block;
        }

        .search-box {
          display: flex;
        }

        .search-box input {
          flex: 1;
          padding: 10px;
          border: 1px solid var(--border-gray);
          border-radius: 4px 0 0 4px;
          outline: none;
        }

        .search-box button {
          background: var(--primary-blue);
          color: white;
          padding: 0 15px;
          border-radius: 0 4px 4px 0;
        }

        .category-list li {
          margin-bottom: 12px;
          font-size: 14px;
        }

        .category-list a {
          display: flex;
          justify-content: space-between;
          color: var(--dark-gray);
          padding: 6px 12px;
          border-radius: 4px;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .category-list a span {
          color: var(--medium-gray);
          font-weight: 600;
        }

        .category-list a.active, .category-list a:hover {
          color: white;
          background-color: var(--accent-orange);
          padding-left: 16px;
        }

        .category-list a.active span, .category-list a:hover span {
          color: white;
        }

        .recent-posts li {
          margin-bottom: 20px;
        }

        .recent-posts a {
          display: block;
          font-weight: 600;
          font-size: 14px;
          line-height: 1.4;
          margin-bottom: 5px;
        }

        .recent-date {
          font-size: 12px;
          color: var(--medium-gray);
        }

        @media (max-width: 992px) {
          .news-layout {
            grid-template-columns: 1fr;
          }
          .news-sidebar {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .news-grid-full {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default News;
