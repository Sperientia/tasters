import { headerFields } from '../../data/header'
import './Header.css'

export const HeaderNav = () => {
	return (
		<nav className='header__nav'>
			<ul className='navbar__list'>
				{headerFields.map((field, index) => {
					let extraClassName = ''
					if (field.type === 'button') extraClassName = 'navbar__item--button'
					return (
						<li key={index} className={`navbar__item ${extraClassName}`}>
							<a href={field.href} className='navbar__link' rel='noreferrer'>{field.label}</a>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}