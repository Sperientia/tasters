/* eslint-disable react/prop-types */
import { FormButton } from "./FormButton"
import { useStore } from "../../hooks/useStore"
import { useFormStore } from "../../hooks/useFormStore"

export const FormButtons = () => {
	const {
		accessCode
	} = useStore()
	const {
		formsData,
		loadingFormsData,
		errorFormsData
	} = useFormStore('/tables')

	console.log(formsData)
	return (
		<div className="formButtons__section">
			{loadingFormsData && <p>Loading...</p>}
			{errorFormsData && <p>Error: {errorFormsData}</p>}
			{!loadingFormsData && !errorFormsData && !formsData && <p>No forms found</p>}
			
			{!loadingFormsData && !errorFormsData && formsData && (
				Object.entries(formsData).map(([formName, formLink], index) => {
					if (formName !== 'users')
						return (
							<FormButton
								key={index}
								formName={formName}
								formLink={formLink[0]}
								accessCode={accessCode}
							/>
						)	
					return null
				})
			)}
		</div>
	)
}
