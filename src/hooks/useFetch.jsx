import { useState, useEffect } from 'react'

function useFetch(requestParams) {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const { url } = requestParams

	useEffect(() => {
		const fetchData = async (url) => {
			try {
				const response = await fetch(url)
				if (!response.ok) throw new Error('Error Fetching Data with status: ' + response.status)
				const json = await response.json()
				if (json.status_code < 200 && json.status_code >= 300) throw new Error('Error Fetching Data with status: ' + json.status_code)
				setData(json)
			}
			catch (error) {
				setError(true)
				console.error(error)
				setData([])
			}
			finally {
				setLoading(false)
			}
		}
		fetchData(url)
	}, [])

	return {data, loading, error}
}

export { useFetch }