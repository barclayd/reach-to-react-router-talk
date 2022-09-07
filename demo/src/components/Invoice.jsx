import { navigate } from '@reach/router';

export const Invoice = (props) => {
  if (props.invoiceId === 'mystery') {
    return <button onClick={() => navigate('/secret')}>Click me!</button>;
  }

  return (
    <div>
      <h2>Invoice {props.invoiceId}</h2>
    </div>
  );
};
