import './Fields.css'

// eslint-disable-next-line react/prop-types
function Link({ fieldName, value }) {
	let fieldNameClass = 'field'
	if (!value) fieldNameClass += ' field--empty'
	return (
		<div className={fieldNameClass + ' field__link'}>
			<a href={value} className='field__link__value'>
				<button className='field__btn'>{fieldName}</button>
			</a>
		</div>
	)
}

export { Link }