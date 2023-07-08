import { useState, useEffect } from 'react'

function useFetch(requestParams) {
	const [data, setData] = useState([])
	const { accessCode } = requestParams

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = import.meta.env.VITE_API_URL + accessCode
				const response = await fetch(url)
				const json = await response.json()
				if (json.status_code != 200) throw new Error(json.message)
				setData(json)
			}
			catch (error) {
				console.error(error)
				setData([])
			}
		}
		fetchData()
	}, [])

	return {data}
}

export { useFetch }