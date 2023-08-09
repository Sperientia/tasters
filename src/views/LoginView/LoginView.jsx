import { LoginForm } from '../../components/LoginForm/LoginForm'
import './LoginView.css'

export const LoginView = () => {
	return (
		<div className="container login__view">
			<h4 className='login__title'>
			¡Hola! Ingresa tu <span className='color__pink'>código</span> de acceso para continuar en la cajita de abajo 👇
			</h4>
			<LoginForm />
		</div>
	)
}
