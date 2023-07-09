import React from 'react'

function LogOutBtn() {
	return (
		<button
				className='logout__btn'
				onClick={() => {
					window.location.href = '/'
				}}
			>
				Logout
			</button>
	)
}

export { LogOutBtn }