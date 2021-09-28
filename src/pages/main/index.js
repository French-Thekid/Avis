import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import { Layout } from '../../components'
import NewReport from './NewReport'
import RentersOut from './RentersOut'
import RentersIn from './RentersIn'
import ChangePassword from './ChangePassword'
import { get } from 'idb-keyval'

function Main() {
  const match = useRouteMatch()
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    get('reports').then((val) => {
      if (val) setAmount(val.length)
    }) // eslint-disable-next-line
  }, [])

  return (
    <Layout.MainContainer amount={amount}>
      <Switch>
        <Route
          path={`${match.url}/new-report`}
          render={(props) => (
            <NewReport {...props} amount={amount} setAmount={setAmount} />
          )}
        />
        {/* <Route
          path={`${match.url}/new-report`}
          component={NewReport}
        /> */}
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
