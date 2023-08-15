import { useStore } from '../../hooks/useStore'
import { Header } from '../Header/Header'
import { LoginView } from '../../views/LoginView/LoginView'
import { UserView } from '../../views/UserView/UserView'
import { FormsView } from '../../views/FormsView/FormsView'
import { Footer } from '../Footer/Footer'
import { FormsGalleryView } from '../../views/FormsGalleryView/FormsGalleryView'

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
			{/* If there is an accessCode and view is formsGallery, go to formsGallery */}
			{accessCode && view === 'formsGallery' && (
				<FormsGalleryView
					accessCode={accessCode}
				/>
			)}
			{/* If there is accessCode and view then render FormsView */}
			{accessCode && view && view !== 'formsGallery' && (
				<FormsView
					formLink={view}
					accessCode={accessCode}
				/>
			)}

			{/* <Footer /> */}
			<Footer
				pageNoCompleted={(!view && !accessCode) || (view === 'formsGallery' && accessCode)}
			/>
		</>
	)
}

export default App
