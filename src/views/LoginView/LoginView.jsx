import { LoginForm } from '../../components/LoginForm/LoginForm'
import { socials } from '../../data/social'
import './loginView.css'

export const LoginView = () => {
	return (
		<div className="container login__view">
			<h4 className='login__title'>
			¡Hola! Ingresa tu <span className='color__pink'>código</span> de acceso para continuar en la cajita de abajo 👇
			</h4>
			<LoginForm />
			<p className='login__social__title'>Redes sociales</p>
			<div className='social__icon__section'>
				{socials.map((social, index) => (
					<a href={social.href} target='_blank' key={index} className='social__icon--button'>
						{social.icon()}
					</a> 
				))}
			</div>
		</div>
	)
}
