import { useEffect } from "react"

// Extracting the query params from the url in a custom hook
export const useGetParams = (set_access_code, set_view) => {

	useEffect(() => {
		// The view is got from the query params
		const urlParams = new URLSearchParams(window.location.search)
		const view = urlParams.get("view")
		// The access code is got from local storage
		const accessCode = localStorage.getItem("accessCode")
		// Set the access code and view
		set_access_code(accessCode)
		set_view(view)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return true
}