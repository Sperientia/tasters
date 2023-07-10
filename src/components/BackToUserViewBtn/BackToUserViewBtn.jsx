import React from 'react'
import './BackToUserViewBtn.css'

function BackToUserViewBtn({ accessCode }) {
	return (
		<button
			className='back__btn'
			onClick={() => {
				window.location.href = '?accessCode=' + accessCode
			}}
		>
			Regresar al perfil de usuario
		</button>
	)
}

export { BackToUserViewBtn }