/* eslint-disable react/prop-types */
import './BackButton.css'

export const BackButton = ({ backPage }) => {
	return (
		<a href={(backPage ? `?view=${backPage}`: "/")} className="back__button">
			Regresar
		</a>
	)
}
