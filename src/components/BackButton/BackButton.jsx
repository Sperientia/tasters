/* eslint-disable react/prop-types */
import './BackButton.css'

export const BackButton = ({ accessCode, backPage }) => {
	return (
		<a href={`?accessCode=${accessCode}` + (backPage ? `&view=${backPage}`: "")} className="back__button">
			Regresar
		</a>
	)
}
