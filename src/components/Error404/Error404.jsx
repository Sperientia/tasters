
/* eslint-disable react/prop-types */
export const Error404 = ({ errorMessage }) => {
	return (
		<div className="error__section">
			<h1 className="error__title">
				Algo salió mal:
			</h1>
			<p className="error__message">{errorMessage}</p>
		</div>
	)
}
