import { useStore } from '../../hooks/useStore'
import './ErrorView.css'

export const ErrorView = () => {
	const {
		restartApp
	} = useStore()

	return (
		<div className='wrapper error__view'>
			<h1 className='error__title'>¡Oh no!</h1>
			<p className='error__message'>Parece que algo salió mal, aségurate de que tu código de acceso sea el correcto</p>
			<button className='error__button' onClick={() => restartApp()}>
				Da click aquí para volver a intentarlo
			</button>
		</div>
	)
}
