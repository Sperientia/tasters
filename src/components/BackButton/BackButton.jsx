/* eslint-disable react/prop-types */
import './BackButton.css'

export const BackButton = ({ accessCode }) => {
	return (
		<a href={`?accessCode=${accessCode}`} className="back__button">
			Regresar
		</a>
	)
}
