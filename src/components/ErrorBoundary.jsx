import React from 'react';

/**
 * ErrorBoundary Component
 * Catches JavaScript errors anywhere in their child component tree,
 * logs those errors, and displays a fallback UI instead of crashing the app.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
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
            <p>We apologize for the inconvenience. Please refresh the page or try again later.</p>
            <button 
              className="btn btn-orange" 
              onClick={() => window.location.reload()}
            >
              Reload Page
            </button>
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
