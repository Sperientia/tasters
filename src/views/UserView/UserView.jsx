import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Error404 } from '../Error404/Error404'
import { Profile } from '../../components/Profile/Profile'
import { LogOutBtn } from '../../components/LogOutBtn/LogOutBtn'

function UserView({ accessCode }) {
	const { 
		data: userData,
		loading: userLoading,
		error: userError
	} = useFetch({ 
		url: import.meta.env.VITE_API_URL + 'user/' + accessCode
	})

	const {
		data: mappingData,
		loading: mappingLoading,
		error: mappingError
	} = useFetch({
		url: import.meta.env.VITE_API_URL + 'mapping'
	})
	

	if (userData.status_code < 200 || userData.status_code >= 300) return (<Error404 />)

	return (
		<div className='UserView'>
			{userLoading && !userError && (
				<h1>Loading...</h1>
			)}

			{!userLoading && !userError && userData && (
				<>
					<Profile userData={userData.response} />
					<LogOutBtn />
				</>
			)}

			{userError && (
				<h1>Error</h1>
			)}

		</div>
	)
}

export { UserView }