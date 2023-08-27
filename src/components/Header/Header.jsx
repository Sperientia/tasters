import { useState } from 'react'
import { HeaderNav } from './HeaderNav'
import { HeaderButton } from './HeaderButton'
import headerLogo from '../../assets/header-logo.png'
import './Header.css'

export const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	document.body.style.overflow = menuOpen ? 'hidden' : 'auto'

	return (
		<header className='header'>
			<div className='header__logo'>
				<a href="/">
					<img src={headerLogo} alt='Tasters Logo' className='header__logo__img'/>
				</a>
			</div>
			<HeaderNav
				menuOpen={menuOpen}
			/>
			<HeaderButton
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
			/>
		</header>
	)
}