import React from 'react'
import { socials } from '../../data/socials'
import './LoginView.css'

function LoginForm() {
	return (
		<form className='login__box container'>
			<h2
				className='login__box__title'
			>
				¡Hola! Ingresa tu <span className='color__pink'>código</span> de acceso para continuar
			</h2>
			<div className='login__box__input--container'>
			<input
				type="text"
				name="accessCode"
				id="accessCode"
				className='login__box__input'
				placeholder='- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -'
				/>

				<a href="/" className='login__forgot__password'>¿Olvidaste tu contraseña?</a>
			</div>

			<button
				type="submit"
				className='login__box__btn'
			>
				Entrar
			</button>

		<div className='social__media__container'>
			<p className='social__media__text'>Redes sociales</p>
				<div className='social__media__icons'>
					{socials.map((social, index) => (
						<div className='social__media__icon__container'> 
							<a href={social.href} className='social__media__icon' key={index}> {social.icon()}</a>
						</div>
					))}
			</div>
		</div>
		</form>

	)
}

export { LoginForm }