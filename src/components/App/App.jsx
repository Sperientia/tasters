import './App.css'
import { useGetParams } from '../../hooks/useGetParams'
import { LoginView } from '../../views/LoginView/LoginView'
import { UserView } from '../../views/UserView/UserView'
import { FormsView } from '../../views/FormsView/FormsView'


// This is the App component. Where the view is decided.
function App() {
	const {
		accessCode,
		view,
	} = useGetParams()

  return (
		<>
			{/* If there are no accessCode and no view go to loginView */}
			{!accessCode && !view && 
				<LoginView />
			}

			{/* If there are accessCode but no view or view is other than forms then render UserView */}
			{accessCode && !view &&
				<UserView accessCode = {accessCode} />
			}

			{/* If there are accessCode and view is forms then render FormsView */}
			{accessCode && view &&
				<FormsView view={view} accessCode={accessCode}/>
			}
    </>
  )
}

export default App
