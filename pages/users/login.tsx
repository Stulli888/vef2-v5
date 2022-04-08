import { useState } from 'react'
import Router from 'next/router'
import { useUser } from '../../lib/hooks'

function login(){

	const loginUser = async event => {
    	event.preventDefault() // don't redirect the page
    	const res = await fetch(
      'https://vef2-20222-v3-synilausn.herokuapp.com/users/login',
      		{
      		  body: JSON.stringify({
      		    username: event.target.name.value,
      		    password: event.target.pw.value
      		  }),
      		  headers: {
      		    'Content-Type': 'application/json'
      		  },
      		  method: 'POST'
      		}
    	)
    	console.log('name: ', event.target.name.value)
    	console.log('pw: ', event.target.pw.value)
    	const result = await res.json()
    	console.log(result)
    }
	return (
		<main>
		  <form onSubmit={loginUser}>
       		<label htmlFor="name">username</label>
       		<input id="name" name="name" type="text" autoComplete="name" required />
       		<label htmlFor="pw">password</label>
       		<input id="pw" name="pw" type="password" required />
       		<button type="submit">Login</button>
    	  </form>
		</main>
	)
}

export default login