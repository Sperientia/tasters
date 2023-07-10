// React Hook that set accessCode and view state from url params
import { useState, useEffect } from 'react'

// Remember, view should be on query parameters and accessCode in path parameters
function useGetParams() {
	const [accessCode, setaccessCode] = useState('')
	const [view, setView] = useState('')
	const [form, setForm] = useState('')

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search)
		const accessCode = urlParams.get('accessCode')
		const view = urlParams.get('view')
		setaccessCode(accessCode)
		setView(view)
	}, [])

	return { accessCode, view }
}


export { useGetParams }