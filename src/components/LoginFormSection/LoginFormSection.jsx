import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

import './LoginFormSection.css'

export const LoginFormSection = () => {
	return (
		<div className="login__section">
			<h2 className="login__title">Accede a Tasters</h2>
			<form className="login__form">
				<div className="login__input__wrapper">
					<label className="login__label" htmlFor="access-code">Código de Acceso</label>
					<input className="login__input" type="text" name="access-code" id="access-code" placeholder="Escribe aquí tu código de acceso" />
					<button className="login__btn">Acceder</button>
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
