import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Error404 } from '../Error404/Error404'

function UserView({ accessCode }) {
	const { data } = useFetch(accessCode)
	
	if (data.length === 0) return (<Error404 />)

	return (
		<div className='UserView'>
			<h1>Hello, {accessCode}</h1>
			<button
				className='logout__btn'
				onClick={() => {
					window.location.href = '/'
				}}
			>
				Logout
			</button>
		</div>
	)
}

export { UserView }