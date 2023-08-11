import './LoginForm.css'
	
export const LoginForm = () => {

	return (
		<form className='login__form' autoComplete='off'>
			<input
					type="text"
					name="accessCode"
					id="accessCode"
					className='login__form__input'
					placeholder='Escribe aqui el código de acceso'
					required
			/>
			
			<a href="https://api.whatsapp.com/send?phone=+525522969104&text=%C2%A1Hola%20Tasters!%20Se%20me%20olvido%20mi%20c%C3%B3digo%20acceso,%20%C2%BFme%20lo%20podr%C3%ADan%20brindar" className='login__forgot__password'>¿Olvidaste tu contraseña?</a>

			<button
				type="submit"
				className='login__form__button'
			>
				Entrar
			</button>

		</form>
	)
}
