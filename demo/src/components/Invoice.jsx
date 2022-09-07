import { useParams, useNavigate, useLocation } from 'react-router-dom';

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
