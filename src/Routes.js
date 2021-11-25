import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Sobre from './pages/Sobre'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sobre" exact component={Sobre} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
