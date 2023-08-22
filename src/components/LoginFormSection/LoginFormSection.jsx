import { BsWhatsapp } from 'react-icons/bs'
import { useStore } from '../../hooks/useStore'
import { AiOutlineMail } from 'react-icons/ai'

import './LoginFormSection.css'

export const LoginFormSection = () => {
	const {
		setAccessCode
	} = useStore()

	const handleClick = (e) => {
		e.preventDefault()
		const currentAccessCode = e.target.form[0].value
		if (!currentAccessCode) {
			const label = document.getElementById('alarm-label')
			label.classList.add('alarm-label-active', 'red')
			label.innerHTML = 'Por favor, escribe tu código de acceso'

			setTimeout(() => {
				label.classList.remove('alarm-label-active')
			}, 2000)
			return
		}
		setAccessCode(currentAccessCode)
		window.location.reload()
	}

	return (
		<div className="login__section">
			<h2 className="login__title">Accede a Tasters</h2>
			<form className="login__form" autoComplete='off'>
				<div className="login__input__wrapper">
					<label className="login__label" htmlFor="access-code" id='alarm-label'>Código de Acceso</label>
					<input className="login__input" type="text" name="access-code" id="access-code" placeholder="Escribe aquí tu código de acceso" required />
					<button className="login__btn" onClick={(e) => handleClick(e)}>Acceder</button>
				</div>
				<p className="login__msg">
					El código de acceso es una serie de caracteres que está presente en todos los correos que te hemos enviado hasta el momento. Si no lo encuentras, por favor elige alguna de estas opciones:
				</p>
				<a href="#" className="request__link"> <BsWhatsapp /> Solicita tu código a través de WhatsApp</a>
				<a href="#" className="request__link"><AiOutlineMail />Solicita tu código a través de correo electrónico</a>
			</form>
		</div>
	)
}
