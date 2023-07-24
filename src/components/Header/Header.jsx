import { HeaderNav } from './HeaderNav'
import headerLogo from '../../assets/header-logo.png'
import './Header.css'

export const Header = () => {
	return (
		<header className='header'>
			<div className='header__logo'>
				<a href="/">
					<img src={headerLogo} alt='Tasters Logo' className='header__logo__img'/>
				</a>
			</div>
			<HeaderNav />
		</header>
	)
}