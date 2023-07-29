import { Error404 } from '../../components/Error404/Error404'
import { FormSection } from '../../components/FormSection/FormSection'
import { LoadingContainer } from '../../components/LoadingContainer/LoadingContainer'
import { useFormStore } from '../../hooks/useFormStore'
import { useStoreMapping } from '../../hooks/useStoreMapping'

// eslint-disable-next-line react/prop-types
export const FormsView = ({ formLink, accessCode }) => {
	// Get the reducer from mappingData
	const {
		mappingData,
		loadingMappingData,
		errorMappingData
	} = useStoreMapping(formLink)

	// Get the reducer from useFormStore
	const {
		formsData,
		loadingFormsData,
		errorFormsData
	} = useFormStore(`/table/${formLink}/${accessCode}`)

	const loadingData = loadingMappingData || loadingFormsData
	const errorData = errorMappingData || errorFormsData

	let className = 'forms__view container' + (loadingData ? ' loading' : '')
	className = className + (errorData ? ' error' : '')

	return (
		<div className={className}>
			{loadingData && <LoadingContainer /> }

			{errorData && !loadingData && (
				<Error404 errorMessae={errorData} />
			)}

			{formsData && !loadingData && !errorData && (
				<>
					<FormSection
						data={formsData[0]}
						mappingData={mappingData}
						accessCode={accessCode}
						backButton={true}
						title={[mappingData[0]['table_frontend_name']]}
					/>
				</>
			)}
		</div>
	)
}
