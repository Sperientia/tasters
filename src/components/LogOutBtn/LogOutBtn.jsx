import React from 'react'
import './LogOutBtn.css'

function LogOutBtn() {
	return (
		<button
				className='logout__btn'
				onClick={() => {
					window.location.href = '/'
				}}
			>
				Salir de la cuenta
			</button>
	)
}

export { LogOutBtn }