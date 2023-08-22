import { useStore } from '../../hooks/useStore'
import { Header } from '../Header/Header'
import { LoginView } from '../../views/LoginView/LoginView'
import { UserView } from '../../views/UserView/UserView'
import { Footer } from '../Footer/Footer'

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
			{/* If there is an accessCode and a no view, show the user view */}
			{accessCode && !view && (
				<UserView
					accessCode={accessCode}
				/>
			)}

			{/* <Footer /> */}
			<Footer />
		</>
	)
}

export default App
