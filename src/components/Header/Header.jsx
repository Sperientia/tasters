import React from 'react'
import { HeaderNav } from './HeaderNav/HeaderNav'
import headerLogo from '../../assets/header-logo.png'
import './Header.css'

function Header() {
	return (
		<header className='header'>
			<div className='header__logo'>
				<img src={headerLogo} alt='Tasters Logo' className='header__logo__img'/>
			</div>
			<HeaderNav />
		</header>
	)
}

export { Header }