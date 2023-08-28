import { useReducer } from "react"
import { useGetParams } from "./useGetParams"

// Create reducer
const reducer = (state, action) => {
	// Get type
	const { type } = action
	// Restart action
	if (type === 'RESTART_APP') {
		// Remove accessCode from local storage
		localStorage.removeItem('accessCode')
		// Restart window without the query params
		window.location.reload()
		// Return new state
		return {
			accessCode: '',
			view: ''
		}
	}
	// Set access code
	if (type === 'SET_ACCESS_CODE') {
		const { accessCode } = action
		// Check if accessCode
		if (!accessCode)
			return state

		// Save accessCode in local storage
		localStorage.setItem('accessCode', accessCode)
		// Return new state
		return {
			...state,
			accessCode
		}
	}
	// Set view
	if (type === 'SET_VIEW') {
		const { view } = action
		// Check if view
		if (!view)
			return state
		return {
			...state,
			view
		}
	}

	// Return state
	return state
}

// Create store
export function useStore() {
	// Create the useReducer hook and get the dispatch
	// Get the accessCode and view from the query params
	const [{
		accessCode,
		view
	}, dispatch] = useReducer(reducer, {
		accessCode: null,
		view: null
	})

	// Create actions dispatchers
	const restartApp = () => dispatch({ type: 'RESTART_APP' })
	const setAccessCode = accessCode => dispatch({ type: 'SET_ACCESS_CODE', accessCode })
	const setView = view => dispatch({ type: 'SET_VIEW', view })
	// Initialize reducer state
	useGetParams(setAccessCode, setView)



	// Return store
	return {
		accessCode,
		view,
		restartApp,
		setAccessCode,
		setView
	}
}