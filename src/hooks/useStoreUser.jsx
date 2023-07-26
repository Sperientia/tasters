import { useReducer } from 'react'
import { useFetch } from './useFetch'

// Create reducer
const userReducer = (state, action) => {
	// Create call api action
	const { type } = action
	if (type === 'CALL_API')
		return {
			...state,
			loadingUserData: true,
		}
	
	// Create login action
	if (type === 'LOGIN') {
		const { data } = action
		return {
			...state,
			userData: data,
			loadingUserData: false,
			}
	}

	// Create error action
	if (type === 'ERROR')
		return {
			...state,
			userData: null,
			errorUserData: true,
			loadingUserData: false,
		}
}

// Crete store
export function useStoreUser(accessCode) {
	// Create the useReducer hook and get the dispatch
	const [{
		userData,
		loadingUserData,
		errorUserData
	}, dispatch] = useReducer(userReducer, {
		userData: null,
		loadingUserData: false,
		errorUserData: null
	})
	// Create actions dispatchers
	const callAPI = () => dispatch({ type: 'CALL_API' })
	const login = data => dispatch({ type: 'LOGIN', data })
	const setError = () => dispatch({ type: 'ERROR' })

	// use fetch for initial login
	useFetch(import.meta.env.VITE_API_URL + '/user/' + accessCode, {
		callAPI,
		login,
		setError,
		loadingUserData
	})
	
	// Return state
	return {
		userData,
		loadingUserData,
		errorUserData,
	}
}