/* eslint-disable react/prop-types */
import { Text } from '../Fields/Text'
import { Checkbox } from '../Fields/Checkbox'
import { Link } from '../Fields/Link'

const typeOfInput = {
	text: (index, fieldName, value) => <Text key={index} fieldName={fieldName} value={value} />,
	checkbox: (index, fieldName, value) => <Checkbox key={index} fieldName={fieldName} value={value} />,
	link: (index, fieldName, value) => <Link key={index} fieldName={fieldName} value={value} />,
}

export const FormSection = ({ data, mappingData, title, subtitle }) => {
	return (
		<div className="form__section">
			<h1 className="form__title">{title.map((part, index) => (
				<span key = {index}>{part} </span>
			))}</h1>
			<p className="form__subtitle">{subtitle}</p>
			
			<div className="questions__section">
				{mappingData.map((field, index) => (
					typeOfInput[field.type](index, field.frontend_name, data[field.airtable_name])
				))}
			</div>

		</div>
	)
}
