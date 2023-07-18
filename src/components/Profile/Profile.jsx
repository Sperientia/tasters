import React from 'react'
import './Profile.css'
import { Text } from '../Fields/Text'
import { Checkbox } from '../Fields/Checkbox'
import { Link } from '../Fields/Link'
import { FormsSection } from '../FormsSection/FormsSection'

function Profile({ userData, mappingData }) {
	let data = userData.response
	let mapping = mappingData.response
	return (
		<div className='profile__section'>
			<div className='profile__container'
			>
				<h1 className='profile__title'>Hola, <span className='name'>{data.name}</span></h1>
				<p className='profile__subtitle'>Este es tu perfil de tasters, al final de la página habrá un link donde podrás actualizar y completar tus datos.</p>
						
				<div className='profile__data'>
					{mapping.map((field, index) => {
						if (field.type === 'text') return <Text key={index} fieldName={field.frontend_name} value={data[field.airtable_name]} />
						if (field.type === 'checkbox') return <Checkbox key={index} fieldName={field.frontend_name} value={data[field.airtable_name]} />
						if (field.type === 'link') return <Link key={index} fieldName={field.frontend_name} value={data[field.airtable_name]} />
					})}	
				</div>

			<FormsSection userData={userData} />
			</div>

		</div>
	)
}

export { Profile }