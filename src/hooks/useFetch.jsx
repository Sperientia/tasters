import { useEffect } from "react"

// Fetch data from the API
export const useFetch = (url, {callAPI, login, setError, loadingUserData}) => {
	
	useEffect(() => {
		const fetchData = async () => {
			if (loadingUserData) return
			callAPI()
			try {
				const response = await fetch(url)
				// Check if the response is ok
				if (!response.ok)
					throw new Error("Something went wrong", response.statusText)
				// Get the data
				const data = await response.json()
				login(data)
			} catch (error) {
				console.error(`Error: ${error.message}`)
				setError()
			}
		}

		fetchData(url)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

}