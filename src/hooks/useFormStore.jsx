import { useReducer } from 'react'
import { useFetch } from './useFetch'

// Create reducer
const formsReducer = (state, action) => {
	// Create call api action
	const { type } = action
	if (type === 'CALL_API')
		return {
			...state,
			loadingFormsData: true,
		}
	
	// Create login action
	if (type === 'SUCCESS') {
		const { data } = action
		return {
			...state,
			formsData: data,
			loadingFormsData: false,
			}
	}

	// Create error action
	if (type === 'ERROR') {
		const { currentError } = action
		return {
			...state,
			formsData: null,
			errorFormsData: currentError || true,
			loadingFormsData: false,
		}
	}
	
}

// Crete store
export function useFormStore(urlParams) {
	// Create the useReducer hook and get the dispatch
	const [{
		formsData,
		loadingFormsData,
		errorFormsData
	}, dispatch] = useReducer(formsReducer, {
		formsData: null,
		loadingFormsData: false,
		errorFormsData: null
	})
	// Create actions dispatchers
	const callAPI = () => dispatch({ type: 'CALL_API' })
	const setData = data => dispatch({ type: 'SUCCESS', data })
	const setError = currentError => dispatch({ type: 'ERROR', currentError })

	// use fetch for initial login
	useFetch(import.meta.env.VITE_API_URL + urlParams, {
		callAPI,
		setData,
		setError,
		loadingFormsData
	})
	
	// Return state
	return {
		formsData,
		loadingFormsData,
		errorFormsData,
	}
}