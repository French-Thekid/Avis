import React from 'react'

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Login, ForgetPassword } from './pages/auth'
import Main from './pages/main'
import { PrivateRoute } from './components'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/forget-password" component={ForgetPassword} />
        <PrivateRoute path="/main" component={Main} />
      </Switch>
    </Router>
  )
}

export default App
