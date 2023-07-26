import './Fields.css'

// eslint-disable-next-line react/prop-types
function Checkbox({ fieldName, value }) {
	let fieldNameClass = 'field'
	let checkboxClass = 'field__checkbox'
	if (!value) {
		fieldNameClass += ' field--empty'
		checkboxClass += ' field__checkbox--false'
	} else {
		checkboxClass += ' field__checkbox--true'
	}
	return (
		<div className={fieldNameClass + ' field'}>
			<div className='field__name'>
				{fieldName}
			</div>
			<div className={checkboxClass}>
				{value ? '✓' : '✗'}
			</div>
		</div>
	)
}

export { Checkbox }