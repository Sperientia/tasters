export const headerFields = [
	{ label: 'Nosotros', href: '/' },
	{ label: 'Reclutamiento', href: '/' },
	{ label: 'Blog', href: '/' },
	{ label: 'Contacto', href: '/' },
	{ label: 'Registro', href: '/', type: 'button', condition: 'isNotLoggedIn' },
	{ label: 'Salir', href: '/', type: 'button', condition: 'isLoggedIn' },
]