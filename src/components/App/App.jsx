import { useStore } from '../../hooks/useStore'
import { Header } from '../Header/Header'
import { LoginView } from '../../views/LoginView/LoginView'
import { UserView } from '../../views/UserView/UserView'

function App() {
	// Get the accessCode and view from useStore
	const {
		accessCode,
		view
	} = useStore()

	// If there is no accessCode and view, go to loginView
	if (!accessCode && view) window.location.href = '/'

	return (
		<>
			{/* We always show the header */}
			<Header />
			{/* If there is no accessCode and no view, go to loginView */}
			{!accessCode && !view && (
				<LoginView />
			)}
			{/* If there is an accessCode and no view, go to userView */}
			{accessCode && !view && (
				<UserView accessCode={accessCode}/>
			)}
			{/* If there is accessCode and view then render FormsView */}
			{accessCode && view && (
				<h1>FormsView4</h1>
			)}
		</>
	)
}

export default App
