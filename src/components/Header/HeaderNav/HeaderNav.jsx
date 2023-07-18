import React from 'react'
import { headerFields } from '../../../data/header'
import '../Header.css'

function HeaderNav() {
	return (
			<nav className='header__nav'>
				<ul className='navbar__list'>
					{headerFields.map((field, index) => {
						let extraClassName = ''
						if (field.type === 'button') extraClassName = 'navbar__item--button'
						return (
							<li key={index} className={`navbar__item ${extraClassName}`}>
								<a href={field.href} className='navbar__link' target='_blank'>{field.label}</a>
							</li>
						)
					})}
				</ul>
			</nav>
	)
}

export { HeaderNav}