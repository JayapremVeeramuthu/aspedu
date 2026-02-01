import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container-custom section-padding text-center">
        <div className="max-w-md mx-auto">
          <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="btn-primary">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-ghost"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
