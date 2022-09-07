import {Link} from '@reach/router';
import React from 'react';


export const Nav = () => (
    <>
        <h1>Tutorial!</h1>
        <nav>
            <Link to="/">Home</Link>{" "}
            <Link to="dashboard">Dashboard</Link>{" "}
            <Link to="invoices">Invoices</Link>
        </nav>
    </>
)