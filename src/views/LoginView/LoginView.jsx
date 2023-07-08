import React from 'react'

function LoginView() {
	return (
		<div className='LoginView'>
			<form className='login__box'>
				<label htmlFor="accessCode">Código de acceso</label>
				<input type="text" name="accessCode" id="accessCode" />
				<button type="submit">Entrar</button>
			</form>
		</div>
	)
}

export { LoginView }