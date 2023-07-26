import { useReducer } from 'react'
import { useFetch } from './useFetch'

const mappingReducer = (state, action) => {
	const { type } = action
	
	// Call api
	if (type === 'CALL_API')
		return {
			...state,
			loadingMappingData: true,
		}
	
	// Success
	if (type === 'SUCCESS') {
		const { data } = action
		return {
			...state,
			mappingData: data,
			loadingMappingData: false,
			}
	}

	// Error
	if (type === 'ERROR') {
		const { currentError } = action
		return {
			...state,
			mappingData: null,
			errorMappingData: currentError || true,
			loadingMappingData: false,
		}
	}
}

// Create store
export function useStoreMapping(tableName) {
	// Create the useReducer hook and get the dispatch
	const [{
		mappingData,
		loadingMappingData,
		errorMappingData
	}, dispatch] = useReducer(mappingReducer, {
		mappingData: null,
		loadingMappingData: false,
		errorMappingData: null
	})
	// Create actions dispatchers
	const callAPI = () => dispatch({ type: 'CALL_API' })
	const success = data => dispatch({ type: 'SUCCESS', data })
	const setError = currentError => dispatch({ type: 'ERROR', currentError })

	// use fetch for initial login
	useFetch(import.meta.env.VITE_API_URL + '/mapping/' + tableName, {
		callAPI,
		setData: success,
		setError,
		loadingMappingData
	})

	return {
		mappingData,
		loadingMappingData,
		errorMappingData
	}
}