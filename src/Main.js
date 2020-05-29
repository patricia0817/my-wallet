import React, { useEffect, useState, useReducer } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { useImmerReducer } from 'use-immer'

import Home from './components/Home'
import Transactions from './components/Transactions'
import Analytics from './components/Analytics'
import FlashMessages from './components/FlashMessages'
import StateContext from './StateContext'
import DispatchContext from './DispatchContext'


function Main() {
  const initialState = {
    loggedIn: false,
    flashMessages: [],
    user: {}
  }

  function appReducer( draft, action ) {
    switch ( action.type ) {
      case 'login':
        draft.loggedIn = true
        draft.user = action.value
        return
      case 'logout':
        draft.loggedIn = false
        return
      case 'flashMessage':
        draft.flashMessages.push( action.value )
        return
    }
  }


  const [ state, dispatch ] = useImmerReducer( appReducer, initialState )

  return (
    <StateContext.Provider value={ state }>
      <DispatchContext.Provider value={ dispatch }>
        <BrowserRouter>
          <FlashMessages messages={ state.flashMessages } />
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/transactions'>
              <Transactions />
            </Route>
            <Route path='/analytics'>
              <Analytics />
            </Route>
          </Switch>
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default Main