import React from 'react'
import { Route, Redirect } from 'react-router'

function PrivateRoute({ component: Component, ...rest }) {
  let hasValidSession = false
  console.log(localStorage.getItem('LoggedInUser'))
  if (
    localStorage.getItem('LoggedInUser') !== null &&
    localStorage.getItem('LoggedInUser') !== undefined
  ) {
    hasValidSession = true
  }

  console.log('Valid Session: ', hasValidSession)
  return (
    <Route
      {...rest}
      render={(props) =>
        hasValidSession ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}
export default PrivateRoute
