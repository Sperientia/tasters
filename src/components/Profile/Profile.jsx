import React from 'react'
import './Profile.css'
import { Text } from '../Fields/Text'
import { Checkbox } from '../Fields/Checkbox'

function Profile({ userData, mappingData }) {
	let data = userData.response
	let mapping = mappingData.response
	console.log(data)
	console.log(mapping)
	return (
		<div className='profile__section'>
			<h1 className='profile__title'>Hola, {data.name}</h1>
			<p className='profile__subtitle'>Este es tu perfil de tasters, al final de la página habrá un link donde podrás actualizar y completar tus datos.</p>
					
			<div className='profile__data'>
				{mapping.map((field, index) => {
					if (field.type === 'text') return <Text key={index} fieldName={field.frontend_name} value={data[field.airtable_name]} />
					if (field.type === 'checkbox') return <Checkbox key={index} fieldName={field.frontend_name} value={data[field.airtable_name]} />
				})}	
			</div>

		</div>
	)
}

export { Profile }