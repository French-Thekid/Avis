import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import { Layout } from '../../components'
import NewReport from './NewReport'
import RentersOut from './RentersOut'
import RentersIn from './RentersIn'
import ChangePassword from './ChangePassword'

function Main() {
  const match = useRouteMatch()

  return (
    <Layout.MainContainer>
      <Switch>
        <Route path={`${match.url}/new-report`} component={NewReport} />
        <Route path={`${match.url}/renters-out`} component={RentersOut} />
        <Route path={`${match.url}/renters-in`} component={RentersIn} />
        <Route
          path={`${match.url}/change-password`}
          component={ChangePassword}
        />
      </Switch>
    </Layout.MainContainer>
  )
}

export default Main
