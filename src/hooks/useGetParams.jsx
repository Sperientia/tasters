import { useState, useEffect } from "react"

// Extracting the query params from the url in a custom hook
export const useGetParams = () => {
	const [accessCode, setAccessCode] = useState("")
	const [view, setView] = useState("")

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search)
		const accessCode = urlParams.get("access_code")
		const view = urlParams.get("view")
		setAccessCode(accessCode)
		setView(view)
	}, [])

	return {accessCode, view}
}