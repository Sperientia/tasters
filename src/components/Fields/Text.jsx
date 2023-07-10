import React from 'react'
import './Fields.css'

function Text({ fieldName, value }) {
	let fieldNameClass = 'field'
	let fieldValueClass = 'field__value'
	let displayedValue = value || value === 0 ? value : 'No completado'
	if (!value && value != 0) fieldNameClass += ' field--empty'
	if (!value && value != 0) fieldValueClass += ' field__value--empty'
	return (
		<div className={fieldNameClass}>
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