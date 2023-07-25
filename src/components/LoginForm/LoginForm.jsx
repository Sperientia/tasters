import { useStore } from '../../hooks/useStore'
import './LoginForm.css'
	
export const LoginForm = () => {

	return (
		<form className='login__form'>
			<input
					type="text"
					name="accessCode"
					id="accessCode"
					className='login__form__input'
					placeholder='Escribe aqui el código de acceso'
					required
			/>
			
			<a href="/" className='login__forgot__password'>¿Olvidaste tu contraseña?</a>

			<button
				type="submit"
				className='login__form__button'
			>
				Entrar
			</button>

		</form>
	)
}
