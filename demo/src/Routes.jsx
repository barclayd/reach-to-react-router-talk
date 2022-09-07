import { Routes as BrowserRoutes, Route } from 'react-router-dom';
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
  <BrowserRoutes>
    <Route path="/" element={<Home />} />
    <Route
      path="/dashboard"
      element={<ProtectedRoute isAuthorized={isAuthorized} />}
    >
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
    <Route path="invoices" element={<Invoices />}>
      <Route index element={<InvoicesIndex />} />
      <Route path=":invoiceId" element={<Invoice />} />
    </Route>
    <Route path="secret" element={<Secret />} />
    <Route path="login" element={<Login />} />
    <Route path="*" element={<NotFound />} />
  </BrowserRoutes>
);
