import { Router } from '@reach/router';
import { Dashboard } from './components/Dashboard';
import { Home } from './components/Home';
import { Invoices } from './components/Invoices';
import { InvoicesIndex } from './components/InvoiceIndex';
import { Invoice } from './components/Invoice';
import { NotFound } from './components/NotFound';
import { Secret } from './components/Secret';
import { Login } from './components/Login';
import { ProtectedRoute } from './components/ProtectedRoute';

export const Routes = ({ isAuthorized }) => (
  <Router>
    <Home path="/" />
    <ProtectedRoute
      component={Dashboard}
      path="/dashboard"
      isAuthorized={isAuthorized}
    />
    <Invoices path="invoices">
      <InvoicesIndex path="/" />
      <Invoice path=":invoiceId" />
    </Invoices>
    <Secret path="secret" />
    <Login path="/login" />
    <NotFound default />
  </Router>
);
