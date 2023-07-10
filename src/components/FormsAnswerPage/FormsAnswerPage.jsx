import React from 'react'
import { Text } from '../Fields/Text'
import { Checkbox } from '../Fields/Checkbox'
import { Link } from '../Fields/Link'
import { Multiple } from '../Fields/Multiple'

import './FormsAnswerPage.css'

function FormsAnswerPage({ formsData, mappingData }) {
	let data = formsData.response[0]
	return (
		<div className='answer__page'>
			<h1 className='answer__page__title'>{mappingData.response[0].table_frontend_name}</h1>
			<p className='answer__page__subtitle'>Estas son las respuestas que has dado a este formulario y las que te faltan por contestar</p>
			
			<div className='answer__page__data'>
				{mappingData.response.map((field, index) => {
					if (field.type === 'text') return <Text key={index} fieldName={field.frontend_name} value={data[field.airtable_name]} />
					if (field.type === 'checkbox') return <Checkbox key={index} fieldName={field.frontend_name} value={data[field.airtable_name]} />
					if (field.type === 'link') return <Link key={index} fieldName={field.frontend_name} value={data[field.airtable_name]} />
					if (field.type === 'multiple') return <Multiple key={index} fieldName={field.frontend_name} value={data[field.airtable_name]} />
				})}

			</div>
		</div>
	)
}

export { FormsAnswerPage }