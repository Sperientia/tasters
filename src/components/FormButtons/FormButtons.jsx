/* eslint-disable react/prop-types */
import { FormButton } from "./FormButton"
import { useFormStore } from "../../hooks/useFormStore"
import { LoadingContainer } from "../LoadingContainer/LoadingContainer"

export const FormButtons = ({ formsDone }) => {
	const {
		formsData,
		loadingFormsData,
		errorFormsData
	} = useFormStore('/tables')


	return (
		<div className="formButtons__section">
			{loadingFormsData && <LoadingContainer />}
			{errorFormsData && <p>Error: {errorFormsData}</p>}
			{!loadingFormsData && !errorFormsData && !formsData && <p>No forms found</p>}
			
			{!loadingFormsData && !errorFormsData && formsData && formsDone && (
				Object.entries(formsData).map(([formLink, formName], index) => {
					let extraClassName = ''
					if (formsDone[formLink + '_done'] === true) {
						extraClassName += 'done'
					}
					if (formLink !== 'users')
						return (
							<FormButton
								key={index}
								formName={formName[0]}
								formLink={formLink}
								extraClassName={extraClassName}
							/>
						)	
					return null
				})
			)}
		</div>
	)
}
