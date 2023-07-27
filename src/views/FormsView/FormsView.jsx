import { Error404 } from '../../components/Error404/Error404'
import { FormSection } from '../../components/FormSection/FormSection'
import { useStoreUser } from '../../hooks/useStoreUser'
import { useStoreMapping } from '../../hooks/useStoreMapping'

// eslint-disable-next-line react/prop-types
export const FormsView = ({ formName, accessCode }) => {
	// Get the reducer from mappingData
	const {
		mappingData,
		loadingMappingData,
		errorMappingData
	} = useStoreMapping(formName)

	// Get the reducer from useStoreUser
	const {
		userData,
		loadingUserData,
		errorUserData
	} = useStoreUser(accessCode)

	console.log(mappingData, userData)

	const loadingData = loadingMappingData || loadingUserData
	const errorData = errorMappingData || errorUserData

	let className = 'forms__view container' + (loadingData ? ' loading' : '')
	className = className + (errorData ? ' error' : '')

	return (
		<div className={className}>
			{loadingData && <p>Loading...</p>}

			{errorData && !loadingData && (
				<Error404 errorMessae={errorData} />
			)}

			{userData && !loadingData && !errorData && (
				<>
					<FormSection
						data={userData}
						mappingData={mappingData}
					/>
				</>
			)}
		</div>
	)
}
