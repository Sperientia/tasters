/* eslint-disable react/prop-types */
import { socials } from '../../data/social'
import footerLogo from '../../assets/footer-logo.png'
import './Footer.css'

export const Footer = ({ pageNoCompleted }) => {
	let className = 'footer'
	if (pageNoCompleted) className += ' footer--no-completed'
	return (
		<footer className={className}>
			<div className="footer__line first">
				<div className="footer_first_line__left">
					<img src={footerLogo} alt='Tasters Logo Footer' className='footer__logo__img'/>
				</div>
				<div className="footer_first_line__right">
					{socials.map((social, index) => (
						<a href={social.href} target='_blank' key={index} className='social__icon--button' rel='noreferrer'>
							{social.icon()}
						</a> 
					))}
				</div>
			</div>


		</footer>
	)
}
