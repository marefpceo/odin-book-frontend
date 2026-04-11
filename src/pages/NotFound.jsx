import { Link } from 'react-router';

function NotFound() {
  return (
    <div>
      <h1>
        <span>
          404
        </span>
        <br />
      </h1>
      <p>
        This page does not exist
      </p>
      <Link to={'/'} replace>
        <p>
          Return to Home
        </p>
      </Link>
    </div>
  );
}

export default NotFound;
