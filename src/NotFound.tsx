import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/news">Go to News</Link>
    </div>
  );
}