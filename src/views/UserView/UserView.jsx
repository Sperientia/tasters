import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Error404 } from '../Error404/Error404'
import { Profile } from '../../components/Profile/Profile'
import { LogOutBtn } from '../../components/LogOutBtn/LogOutBtn'
import { FormsSection } from '../../components/FormsSection/FormsSection'

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
		url: import.meta.env.VITE_API_URL + 'mapping/' + 'users'
	})	

	if (userData.status_code < 200 || userData.status_code >= 300) return <Error404 />
	if (mappingData.status_code < 200 || mappingData.status_code >= 300) return <Error404 />

	return (
		<div className='user__view'>
			{userLoading || mappingLoading ? <h1>Loading...</h1> : null}
			{userError || mappingError ? <Error404 /> : null}
			
			{!userLoading && !mappingLoading && !userError && !mappingError && (
				<>
					<Profile
						userData={userData}
						mappingData={mappingData}
					/>
					<FormsSection userData={userData} />

					<LogOutBtn />
				</>
			)}


		</div>
	)
}

export { UserView }