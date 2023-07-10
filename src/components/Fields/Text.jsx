import React from 'react'
import './Fields.css'

function Text({ fieldName, value }) {
	let fieldNameClass = 'field__text'
	let fieldValueClass = 'field__value'
	let displayedValue = value ? value : 'No completado'
	if (!value) fieldNameClass += ' field--empty'
	if (!value) fieldValueClass += ' field__value--empty'
	return (
		<div className={fieldNameClass + ' field'}>
			<div className='field__name'>
				{fieldName}
			</div>
			<div className={fieldValueClass}>
				{displayedValue}
			</div>
		</div>
	)
}

export { Text }