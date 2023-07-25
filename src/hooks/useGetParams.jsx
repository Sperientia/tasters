import { useState, useEffect } from "react"

// Extracting the query params from the url in a custom hook
export const useGetParams = ({set_access_code, set_view}) => {

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search)
		const accessCode = urlParams.get("accessCode")
		const view = urlParams.get("view")
		set_access_code(accessCode)
		set_view(view)
	}, [])

	return true
}