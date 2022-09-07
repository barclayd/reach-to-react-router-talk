import { Link } from '@reach/router';

export const Nav = () => (
  <>
    <h1>Demo!</h1>
    <nav>
      <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>{' '}
      <Link to="invoices">Invoices</Link>
    </nav>
  </>
);
