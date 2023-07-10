import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Error404 } from '../Error404/Error404'
import { BackToUserViewBtn } from '../../components/BackToUserViewBtn/BackToUserViewBtn'
import { FormsAnswerPage } from '../../components/FormsAnswerPage/FormsAnswerPage'
import './FormsView.css'

function FormsView({ view, accessCode}) {
	const {
		data: formsData,
		loading: formsLoading,
		error: formsError
	} = useFetch({
		url: import.meta.env.VITE_API_URL + 'table/' + view + '/' + accessCode
	})

	const {
		data: mappingData,
		loading: mappingLoading,
		error: mappingError
	} = useFetch({
		url: import.meta.env.VITE_API_URL + 'mapping/' + view
	})

	if (formsData.status_code < 200 || formsData.status_code >= 300) return <Error404 />
	if (mappingData.status_code < 200 || mappingData.status_code >= 300) return <Error404 />

	return (
		<div className='forms__view'>
			{formsLoading || mappingLoading ? <h1>Loading...</h1> : null}
			{formsError || mappingError ? <Error404 /> : null}
			
			{!formsLoading && !mappingLoading && !formsError && !mappingError && (
				<>
					<BackToUserViewBtn accessCode={accessCode} />
					<FormsAnswerPage formsData={formsData} mappingData={mappingData} />
				</>
			)}

		</div>
	)
}

export { FormsView }