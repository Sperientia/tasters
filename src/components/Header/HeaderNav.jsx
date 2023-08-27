/* eslint-disable react/prop-types */
import { headerFields } from '../../data/header'
import { useStore } from '../../hooks/useStore'


export const HeaderNav = ({ menuOpen }) => {
	const { accessCode, restartApp } = useStore()
	const extraClassName = menuOpen ? 'header__nav--open' : ''

	return (
		<nav className={'header__nav ' + extraClassName}>
			<ul className='navbar__list'>
				{headerFields.map((field, index) => {
					let extraClassName = ''
					let onclick = () => {}
					if (field.type === 'button') {
						extraClassName = 'navbar__item--button ' + field.condition
						if (field.condition === 'isLoggedIn' && accessCode) {
							extraClassName += ' show'
							onclick = restartApp
						}
						if (field.condition === 'isNotLoggedIn' && !accessCode) {
							extraClassName += ' show'
							onclick = () => window.location.href = '/'
						}
					}
					return (
						<li key={index} className={`navbar__item ${extraClassName}`} onClick={onclick}>
							<a href={field.href} className='navbar__link' rel='noreferrer'>{field.label}</a>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}