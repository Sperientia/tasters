import { useStoreUser } from '../../hooks/useStoreUser'

// eslint-disable-next-line react/prop-types
export const UserView = ({ accessCode }) => {
	// Get the reducer from useStoreUser
	const {
		userData,
		loadingUserData,
		errorUserData
	} = useStoreUser(accessCode)

	let className = 'user__view container' + (loadingUserData ? ' loading' : '')
	className = className + (errorUserData ? ' error' : '')

	return (
		<div className={className}>
			{loadingUserData && <p>Loading...</p>}

			{errorUserData && !loadingUserData && <p>Something went wrong</p>}

			{userData && !loadingUserData && !errorUserData && (
				<>
					<h1>{userData.name}</h1>
					<p>{userData.email}</p>
					<p>{userData.phone}</p>
				</>
			)}
		</div>
	)
}
