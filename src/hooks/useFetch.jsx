import { useState, useEffect } from "react"

// Fetch data from the API
export const useFetch = (url) => {
	const [fetchState, setFetchState] = useState({
		data: [],
		loading: true,
		error: false
	})

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url)
				// Check if the response is ok
				if (!response.ok)
					throw new Error("Something went wrong", response.statusText)
				// Get the data
				const data = await response.json()
				// Check if internal status code is in range 200-300
				if (data.status_code < 200 || data.status_code >= 300)
					throw new Error("Something went wrong", data.message)
				
				setFetchState({
					data,
					loading: false,
					error: false
				})
			} catch (error) {
				setFetchState({
					data: [],
					loading: false,
					error: true
				})
			}
		}

		fetchData(url)
	}, [url])

	return fetchState
}