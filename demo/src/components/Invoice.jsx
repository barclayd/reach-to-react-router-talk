import { useParams, useNavigate, useLocation } from '@reach/router';

export const Invoice = () => {
  const { invoiceId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  if (invoiceId === 'mystery') {
    return <button onClick={() => navigate('/secret')}>Click me!</button>;
  }

  return (
    <div>
      <h2>Invoice {invoiceId}</h2>
      <p>I was rendered on path: {location.pathname}</p>
    </div>
  );
};
