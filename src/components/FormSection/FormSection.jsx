/* eslint-disable react/prop-types */
import { Text } from '../Fields/Text'
import { Checkbox } from '../Fields/Checkbox'
import { Link } from '../Fields/Link'
import { Multiple } from '../Fields/Multiple'
import { BackButton } from '../BackButton/BackButton'

const typeOfInput = {
	text: (index, fieldName, value) => <Text key={index} fieldName={fieldName} value={value} />,
	checkbox: (index, fieldName, value) => <Checkbox key={index} fieldName={fieldName} value={value} />,
	link: (index, fieldName, value) => <Link key={index} fieldName={fieldName} value={value} />,
	multiple: (index, fieldName, value) => <Multiple key={index} fieldName={fieldName} value={value} />,
}

export const FormSection = ({ data, mappingData, title, subtitle, backButton, accessCode }) => {
	return (
		<div className="form__section">
			{backButton && <BackButton accessCode={accessCode} />}
			<h1 className="form__title">{title?.map((part, index) => (
				<span key = {index}>{part} </span>
			))}</h1>
			<p className="form__subtitle">{subtitle}</p>
			
			<div className="questions__section">
				{mappingData.map((field, index) => {
					if (field.type in typeOfInput)
						return typeOfInput[field.type](index, field.frontend_name, data[field.airtable_name])
					return <p key={index}> Other </p>
				})}
			</div>

		</div>
	)
}
