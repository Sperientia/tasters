import React from 'react'
import './Fields.css'

function Multiple({ fieldName, value }) {
	let fieldNameClass = 'field'
	let fieldValueClass = 'field__value__multiple'
	let displayedValue = value || value === 0 ? value : ['No completado']
	if (!value && value != 0) fieldNameClass += ' field--empty'
	if (!value && value != 0) fieldValueClass += ' field__value--empty'


	return (
		<div className={fieldNameClass}>
			<div className='field__name'>
				{fieldName}
			</div>
			<div className={fieldValueClass}>
				{displayedValue.map((item, index) => {
					return (
						<div key={index} className='multiple__single__value'>
							{item}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export { Multiple }