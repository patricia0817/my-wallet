import React, { useState, useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'

import StateContext from '../StateContext'
import DispatchContext from '../DispatchContext'

import getUserService from '../services/usersService'


function Home( props ) {
  const [ username, setUsername ] = useState();
  const [ password, setPassword ] = useState();

  const appState = useContext( StateContext )
  const appDispatch = useContext( DispatchContext )

  async function handleSubmit( e ) {
    e.preventDefault();

    try {
      const response = await getUserService()

      if ( true ) {
        // if ( response.data.username === username && response.data.password === password ) {
        appDispatch( { type: "login", value: response } );
        props.history.push( "/transactions" )
      } else {
        console.log( 'Invalid Username or Password' )
      }
    } catch ( e ) {
      console.log( "There was a problem" )
    }
  }


  return (
    <div className="login columns is-centered">
      <div className="column page__container is-4-tablet is-centered ">
        <figure className="image is-128x128px">
          <img src="https://d5vf6134d8ffdnfp1qv4rv3l-wpengine.netdna-ssl.com/wp-content/uploads/05-digital-banking-logo.jpg" />
        </figure>
        <p className="subtitle is-3">Welcome to My Wallet</p>
        <form onSubmit={ handleSubmit } className="login__form">
          <div className="field">
            <input onChange={ ( e ) => setUsername( e.target.value ) } className="input" type="text" plaheholder="Username" />
            <input onChange={ ( e ) => setPassword( e.target.value ) } className="input" type="password" plaheholder="Password" />
          </div>
          <div className="control submit__login">
            <button type="submit" className="button is-warning">Log In</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default withRouter( Home )