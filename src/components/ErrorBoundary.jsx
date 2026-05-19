import React from 'react';

/**
 * ErrorBoundary Component
 * Catches JavaScript errors anywhere in their child component tree,
 * logs those errors, and displays a fallback UI instead of crashing the app.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, showDetails: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <div className="error-fallback">
          <div className="error-fallback-content">
            <span className="error-icon">⚠️</span>
            <h2>Something went wrong.</h2>
            <p>We apologize for the inconvenience. Our systems have logged this error.</p>
            <div className="error-actions" style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
              <button 
                className="btn btn-orange" 
                onClick={() => window.location.reload()}
              >
                Reload Page
              </button>
              <button 
                className="btn" 
                onClick={() => { localStorage.clear(); sessionStorage.clear(); window.location.reload(); }}
                style={{ backgroundColor: 'transparent', border: '1px solid #ccc', color: '#555' }}
              >
                Reset App State
              </button>
            </div>
            <button 
              onClick={() => this.setState(prev => ({ showDetails: !prev.showDetails }))}
              style={{ background: 'transparent', border: 'none', color: '#666', textDecoration: 'underline', cursor: 'pointer', fontSize: '13px' }}
            >
              {this.state.showDetails ? 'Hide Diagnostics' : 'Show Diagnostics'}
            </button>
            {this.state.showDetails && this.state.error && (
              <div className="error-diagnostics-box" style={{ marginTop: '15px', padding: '15px', background: '#1e1e1e', borderRadius: '6px', textAlign: 'left', fontSize: '12.5px', overflowX: 'auto', border: '1px solid #333', color: '#e5c07b', fontFamily: 'Consolas, Monaco, monospace', lineHeight: '1.5' }}>
                <div style={{ color: '#e06c75', fontWeight: 'bold', marginBottom: '8px', borderBottom: '1px solid #333', paddingBottom: '5px' }}>
                  🔴 [REACT_RUNTIME_EXCEPTION]
                </div>
                <div style={{ marginBottom: '6px' }}><span style={{ color: '#56b6c2' }}>Type:</span> {this.state.error.name || 'Error'}</div>
                <div style={{ marginBottom: '6px' }}><span style={{ color: '#98c379' }}>Message:</span> {this.state.error.message || this.state.error.toString()}</div>
                <div><span style={{ color: '#c678dd' }}>Stack:</span> <span style={{ color: '#abb2bf' }}>{this.state.error.stack ? this.state.error.stack.split('\n')[0] : 'No stacktrace available.'}</span></div>
              </div>
            )}
          </div>
          <style jsx>{`
            .error-fallback {
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 50vh;
              padding: 40px 20px;
              text-align: center;
              background-color: #f9f9f9;
            }
            .error-fallback-content {
              max-width: 450px;
              background: white;
              padding: 40px;
              border-radius: 8px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            }
            .error-icon {
              font-size: 48px;
              margin-bottom: 20px;
              display: block;
            }
            h2 {
              color: var(--primary-blue, #003087);
              margin-bottom: 10px;
              font-size: 24px;
            }
            p {
              color: #666;
              font-size: 15px;
              line-height: 1.6;
              margin-bottom: 25px;
            }
            .btn {
              display: inline-block;
              padding: 12px 24px;
              font-weight: 700;
              text-transform: uppercase;
              font-size: 14px;
              border-radius: 4px;
              border: none;
              cursor: pointer;
              background-color: var(--accent-orange, #f47920);
              color: white;
              transition: all 0.3s ease;
            }
            .btn:hover {
              background-color: #d96210;
              transform: translateY(-2px);
            }
          `}</style>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
