import React from 'react'
import { BrowserRouter as Redirect, Route } from 'react-router-dom'


export default function ProtectedRoute ({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                authed ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
}