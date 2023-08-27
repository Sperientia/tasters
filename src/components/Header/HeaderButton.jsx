import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

// eslint-disable-next-line react/prop-types
export const HeaderButton = ({ menuOpen, setMenuOpen }) => {
	
	const extraClass = menuOpen ? ' opened' : ''

	return (
		<a className={"header__button" + extraClass} onClick={() => setMenuOpen(!menuOpen)}>
			{menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
		</a>
	)
}
