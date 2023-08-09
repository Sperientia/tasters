import { Error404 } from '../../components/Error404/Error404'
import { FormSection } from '../../components/FormSection/FormSection'
import { useStoreUser } from '../../hooks/useStoreUser'
import { useStoreMapping } from '../../hooks/useStoreMapping'
import { LoadingContainer } from '../../components/LoadingContainer/LoadingContainer'
import { GalleryButton } from '../../components/GalleryButton/GalleryButton'

// eslint-disable-next-line react/prop-types
export const UserView = ({ accessCode }) => {
	// Get the reducer from mappingData
	const {
		mappingData,
		loadingMappingData,
		errorMappingData
	} = useStoreMapping('users')

	// Get the reducer from useStoreUser
	const {
		userData,
		loadingUserData,
		errorUserData
	} = useStoreUser(accessCode)


	let uncompletedForms = false
	if (userData !== null) {
		const userDataFiltered = Object.entries(userData).filter((field) => field[0].includes('done') && field[1][0] === false)

		uncompletedForms = userDataFiltered.length > 0
	}

	const loadingData = loadingMappingData || loadingUserData
	const errorData = errorMappingData || errorUserData

	let className = 'user__view container' + (loadingData ? ' loading' : '')
	className = className + (errorData ? ' error' : '')

	return (
		<div className={className}>
			{loadingData && <LoadingContainer />}

			{errorData && !loadingData && (
				<Error404 errorMessae={errorData} />
			)}

			{userData && !loadingData && !errorData && (
				<>
					<FormSection
						data={userData}
						mappingData={mappingData}
						title={['Hola,', <span className='color__pink' key={1}>{userData.name}</span>]}
						subtitle='Este es tu perfil de tasters, al final de la página habrá un link donde podrás actualizar y completar tus datos.'
					/>
					<GalleryButton
						uncompletedForms={uncompletedForms}
						accessCode={accessCode}
					/>
				</>
			)}
		</div>
	)
}
