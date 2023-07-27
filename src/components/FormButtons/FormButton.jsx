/* eslint-disable react/prop-types */
import './FormButtons.css'

export const FormButton = ({ formName, formLink, accessCode }) => {

	return (
		<a
			href={ `?view=${formLink}&accessCode=${accessCode}` }
			className = "formButton__button"
		>
				{formName}
		</a>
	)
}
