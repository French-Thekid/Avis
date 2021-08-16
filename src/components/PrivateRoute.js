import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router'
import { FirebaseContext } from '../pages/firebase'

function PrivateRoute({ component: Component, ...rest }) {
  const firebase = useContext(FirebaseContext)

  let hasValidSession = false
  if (firebase.getCurrentUserUid() !== null) {
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
