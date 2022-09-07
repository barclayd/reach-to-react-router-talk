import {Router} from '@reach/router';
import React from 'react';
import {Dashboard} from './components/Dashboard';
import {Home} from './components/Home';
import {Invoices} from './components/Invoices';
import {InvoicesIndex} from './components/InvoiceIndex';
import {Invoice} from './components/Invoice';
import {NotFound} from './components/NotFound';

export const Routes = () => (
    <Router>
        <Home path="/" />
        <Dashboard path="/dashboard" />
        <Invoices path="invoices">
            <InvoicesIndex path="/" />
            <Invoice path=":invoiceId" />
        </Invoices>
        <NotFound default />
    </Router>
)