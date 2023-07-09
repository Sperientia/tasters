import React from 'react'
import './LoginView.css'

function LoginForm() {
	return (
		<form className='login__box'>
			<h2
				className='login__box__title'
			>
				Código de acceso
			</h2>
			<input
				type="text"
				name="accessCode"
				id="accessCode"
				className='login__box__input' />
			
			<button
				type="submit"
				className='login__box__btn'
			>
				Entrar
			</button>
		</form>
	)
}

export { LoginForm }