import { RegisterSection } from "../../components/RegisterSection/RegisterSection"
import { LoginFormSection } from "../../components/LoginFormSection/LoginFormSection"
import './LoginView.css'

export const LoginView = () => {
	return (
		<div className="wrapper">
			<div className="login__view">
				<div className="welcome__section">
					<h1 className="welcome__title">¡Hola!</h1>
					<p className="welcome__msg">Accede a la plataforma para registrarte en nuevos estudios, cambiar tu información básica y de contacto y resolver cualquier duda sobre tu información.</p>
					<RegisterSection />
				</div>
				< LoginFormSection />
			</div>
		</div>
	)
}
