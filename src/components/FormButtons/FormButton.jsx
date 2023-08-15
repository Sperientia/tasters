/* eslint-disable react/prop-types */
import './FormButtons.css'

export const FormButton = ({ formName, formLink, extraClassName }) => {

	return (
		<a
			href={ `?view=${formLink}` }
			className = {"formButton__button " + extraClassName}
		>
				{formName}
		</a>
	)
}
