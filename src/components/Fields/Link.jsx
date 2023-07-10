import React from 'react'
import './Fields.css'

function Link({ fieldName, value }) {
	let fieldNameClass = 'field'
	let fieldValueClass = 'field__value'
	if (!value) fieldNameClass += ' field--empty'
	if (!value) fieldValueClass += ' field__value--empty'
	return (
		<div className={fieldNameClass + ' field__link'}>
			<a href={value} target='_blank' className='field__link__value'>
				<button className='field__btn'>{fieldName}</button>
			</a>
		</div>
	)
}

export { Link }