import { useReducer } from "react"
import { useGetParams } from "./useGetParams"

// Create reducer
const reducer = (state, action) => {
	// Get type
	const { type } = action
	// Restart action
	if (type === 'RESTART_APP') {
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
	const restart_app = () => dispatch({ type: 'RESTART_APP' })
	const set_access_code = accessCode => dispatch({ type: 'SET_ACCESS_CODE', accessCode })
	const set_view = view => dispatch({ type: 'SET_VIEW', view })
	// Initialize reducer state
	useGetParams(set_access_code, set_view)



	// Return store
	return {
		accessCode,
		view,
		restart_app,
		set_access_code,
		set_view
	}
}