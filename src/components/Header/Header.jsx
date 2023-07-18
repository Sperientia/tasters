import React from 'react'
import { HeaderNav } from './HeaderNav/HeaderNav'
import './Header.css'

function Header() {
	return (
		<header className='header'>
			<div className='header__logo'>
				<img src='assets/header-logo.png' alt='Tasters Logo' />
			</div>
			<HeaderNav />
		</header>
	)
}

export { Header }