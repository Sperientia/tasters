/* eslint-disable react/prop-types */
import './GalleryButton.css'

export const GalleryButton = ({ uncompletedForms }) => {
	let className = 'gallery__button'
	if (uncompletedForms) className += ' gallery__button--uncompleted'
	return (
		<a 
			href={`?view=formsGallery`}
			className={className}>
			Sección de formularios
		</a>
	)
}
