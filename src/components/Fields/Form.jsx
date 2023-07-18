import React from 'react'
import './Fields.css'
import { FaWpforms } from 'react-icons/fa'

function Form({ formsKey, formsValue, userData }) {
	let done = false
	if (userData.response[formsKey + '_done'] === undefined) done = false
	else done = userData.response[formsKey + '_done'][0]
	let completedClass = done ? ' field__form__link--completed' : ''
	return (
		<a className={'field__form field__form__link' + completedClass} href={`?view=${formsKey}&accessCode=${userData.response.access_code}`}>
			<div className='field__form__link--intern'>
				<FaWpforms />
				<p className='field__form__title'>{formsValue}</p>
			</div>
		</a>
	)
}

export { Form }