/* eslint-disable react/prop-types */
import './GalleryButton.css'

export const GalleryButton = ({ accessCode, uncompletedForms }) => {
	let className = 'gallery__button'
	if (uncompletedForms) className += ' gallery__button--uncompleted'
	return (
		<a 
			href={`?accessCode=${accessCode}&view=formsGallery`}
			className={className}>
			Sección de formularios
		</a>
	)
}
