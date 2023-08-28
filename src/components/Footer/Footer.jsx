/* eslint-disable react/prop-types */
import { socials } from '../../data/social'
import footerLogo from '../../assets/footer-logo.png'
import './Footer.css'

export const Footer = () => {
	let className = 'footer'
	return (
		<footer className={className}>
			<div className="footer__line first">
				<div className="footer__line__left">
					<img src={footerLogo} alt='Tasters Logo Footer' className='footer__logo__img'/>
				</div>
				<div className="footer__line__right">
					{socials.map((social, index) => (
						<a href={social.href} target='_blank' key={index} className='social__icon--button' rel='noreferrer'>
							{social.icon()}
						</a> 
					))}
				</div>
			</div>

			<div className="footer__line second">
						<a href='#' className='footer__links'>Nosotros</a>
						<a href='#' className='footer__links'>Participantes</a>
						<a href='#' className='footer__links'>Reclutamiento</a>
						<a href='#' className='footer__links'>Contacto</a>
			</div>


		</footer>
	)
}
