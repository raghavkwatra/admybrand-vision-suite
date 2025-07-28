import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center animate-fade-in">
        <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-8 flex items-center justify-center">
          <span className="text-4xl font-bold text-white">404</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">Page not found</h1>
        <p className="text-xl text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white rounded-xl hover:opacity-90 transition-opacity"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
