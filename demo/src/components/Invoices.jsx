import { Link } from '@reach/router';

export const Invoices = (props) => (
  <div>
    <h2>Invoices</h2>
    <ul>
      <li>
        <Link to="/invoices/123">Invoice 123</Link>
      </li>
      <li>
        <Link to="/invoices/abc">Invoice ABC</Link>
      </li>
      <li>
        <Link to="/invoices/mystery">Invoice mystery</Link>
      </li>
    </ul>

    {props.children}
  </div>
);
