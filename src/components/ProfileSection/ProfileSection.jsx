/* eslint-disable react/prop-types */
import { useStore } from '../../hooks/useStore'
import { AiOutlineInfoCircle, AiOutlineWarning, AiOutlineBank } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import './ProfileSection.css'

export const ProfileSection = ({ userData }) => {

	const { restartApp } = useStore()
	
	return (
		<div className='profile__section'>
			<span className='profile__welcome'>Bienvenido,</span>
			<h2 className='profile__title'>
				{userData.name.split(' ')[0]}
			</h2>
			<p className='profile__msg'>
				En este espacio podrás consultar los últimos estudios de Tasters en donde tendrás oportunidad de participar. Adicionalmente, abajo 	tenemos otras acciones que puedes realizar.
			</p>

			<div className='profile__options'>
				<h3 className='profile__options--title'>OTRAS OPCIONES</h3>
				<ul className='profile__options--list'>
					<li className='profile__option'>
						<div className='profile__option--icon'> <AiOutlineInfoCircle /> </div>
						<a className='profile__option--link' href={userData.users_form}>Actualiza mi información básica y de contacto</a>
					</li>
					<li className='profile__option'>
						<div className='profile__option--icon'> <AiOutlineBank /> </div>
						<a className='profile__option--link' href='#'>Actualizar mi información bancaria</a>
					</li>
					<li className='profile__option'>
						<div className='profile__option--icon'> <AiOutlineWarning /> </div>
						<a className='profile__option--link' href='#'>Reportar un problema</a>
					</li>
					<li className='profile__option'>
							<div className='profile__option--icon'> <BiLogOut /> </div>
							<a className='profile__option--link' href='#' onClick={() => restartApp()}>Cerrar sesión</a>
					</li>
				</ul>

				<div className='profile__footer'>
					<p className='profile__footer--msg'>
						¿No encuentras lo que buscas? Ponte en contacto con el equipo de Tasters <a href="#">aquí</a>.
					</p>
				</div>
				
			</div>
		</div>
	)
}
