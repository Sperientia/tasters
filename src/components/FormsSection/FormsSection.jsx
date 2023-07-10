import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Form } from '../Fields/Form'
import './FormsSection.css'

function FormsSection({ userData }) {
	const {
		data: formsData,
		loading: formsLoading,
		error: formsError
	} = useFetch({
		url: import.meta.env.VITE_API_URL + 'tables'
	})

	if (formsData.status_code < 200 || formsData.status_code >= 300) return <h1>Error cargando estudios</h1>

	return (
		<div className='forms__section'>
			<p className='forms__section__info'>En esta sección puedes ver los estudios, los que están opacos son los que no has hecho aún.</p>
			<div className='forms__section__forms'>
				{formsLoading ? <h1>Cargando estudios</h1> : null}
				{formsError ? <h1>Error cargando estudios</h1> : null}
				{!formsLoading && !formsError && (
					<>
						{Object.keys(formsData.response).map((key, index) => {
							if (key !== 'users')
								return (
									<Form key={index} formsKey={key} formsValue={formsData.response[key]} userData={userData} />
								)	
							else return null
						})}
					</>
				)}
			</div>
		</div>
	)
}

export { FormsSection }