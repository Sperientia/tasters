import { useStore } from '../../hooks/useStore'
import { Header } from '../Header/Header'

function App() {
	// Get the accessCode and view from useStore
	const {
		accessCode,
		view
	} = useStore()

	return (
		<>
			{/* We always show the header */}
			<Header />
			{/* If there is no accessCode and no view, go to loginView */}
			{!accessCode && !view && (
				<h1>loginView1</h1>
			)}
			{/* If there is an accessCode and no view, go to userView */}
			{accessCode && !view && (
				<h1>userView2</h1>
			)}
			{/* If there is no accessCode and a view, go to loginView */}
			{!accessCode && view && (
				<h1>loginView3</h1>
			)}
			{/* If there is accessCode and view then render FormsView */}
			{accessCode && view && (
				<h1>FormsView4</h1>
			)}
		</>
	)
}

export default App
