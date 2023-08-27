import { ProfileSection } from '../../components/ProfileSection/ProfileSection'
import { LoadingContainer } from '../../components/LoadingContainer/LoadingContainer'
import { StudiesGrid } from '../../components/StudiesGrid/StudiesGrid'
import { ErrorView } from '../ErrorView/ErrorView'
import { useStoreUser } from '../../hooks/useStoreUser'
import './UserView.css'

// eslint-disable-next-line react/prop-types
export const UserView = ({ accessCode }) => {
	const {
		userData,
		loadingUserData,
		errorUserData
	} = useStoreUser(accessCode)

	if (loadingUserData || (!userData && !errorUserData)) return (
		<div className='wrapper user__loading'>
			<LoadingContainer />
		</div>
	)

	if (errorUserData) return <ErrorView />

	return (
		<div className="wrapper user__view">
			<section className="profile__section--wrapper">
				<ProfileSection
					userData={userData}
				/>
			</section>
			<section className="studies_section--wrapper">
				<h2 className='studies__title'>ESTUDIOS RECIENTES</h2>
				<StudiesGrid
					userData={userData}
				/>
			</section>
		</div>
	)
}
