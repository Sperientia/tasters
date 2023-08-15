import { useStore } from '../../hooks/useStore'
import './Error404.css'

/* eslint-disable react/prop-types */
export const Error404 = () => {
	const {
		restartApp
	} = useStore()

	return (
		<div className="error__section">
			<h1 className="error__title">
				Algo salió mal, quizá tu usuario no existe
			</h1>
			<button
				className="try__again__button"
				onClick={() => restartApp()}
			>Volver a intentar
			</button>
		</div>
	)
}
