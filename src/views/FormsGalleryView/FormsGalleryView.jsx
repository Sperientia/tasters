/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FormButtons } from '../../components/FormButtons/FormButtons'
import { LoadingContainer } from '../../components/LoadingContainer/LoadingContainer'
import { Error404 } from '../../components/Error404/Error404'
import { useStoreUser } from '../../hooks/useStoreUser'
import { BackButton } from '../../components/BackButton/BackButton'

export const FormsGalleryView = ({ accessCode }) => {

		// Get the reducer from useStoreUser
		const {
			userData,
			loadingUserData,
			errorUserData
		} = useStoreUser(accessCode)
	
	
		let formsDone = {}
		if (userData !== null) {
			const userDataFiltered = Object.entries(userData).filter((field) => field[0].includes('done'))
	
			for (let i = 0; i < userDataFiltered.length; i++) {
				formsDone[userDataFiltered[i][0]] = userDataFiltered[i][1][0]
			}
		}
	
	return (
		<div className="forms__gallery__view container">
			<BackButton
				accessCode={accessCode}
			/>
			{loadingUserData && <LoadingContainer />}
			{errorUserData && <Error404 />}
			{!loadingUserData && !errorUserData && !userData && <Error404 />}
			
			{!loadingUserData && !errorUserData && userData && (
				<FormButtons
					formsDone={formsDone}
				/>
			)}
		</div>
	)
}
