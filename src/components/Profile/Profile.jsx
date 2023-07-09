import React from 'react'
import './Profile.css'

function Profile({ userData }) {
	console.log(userData)
	return (
		<div className='profile__section'>
			<h1 className='profile__title'>Hello, {userData.name}</h1>
		</div>
	)
}

export { Profile }