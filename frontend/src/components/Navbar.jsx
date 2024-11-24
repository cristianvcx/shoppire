import React from 'react'
import { FaRegWindowClose } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import { SiGooglehome, SiAtlassian, SiMaildotcom } from 'react-icons/si'
import { BsCollectionFill } from 'react-icons/bs'

const Navbar = ({ containerStyles, toggleMenu, menuOpened }) => {
  const navItems = [
    { to: "/", label: "Inicio", icon: <SiGooglehome /> },
    { to: "/collection", label: "Coleccion", icon: <BsCollectionFill /> },
    { to: "/about", label: "Acerca de", icon: <SiAtlassian /> },
    { to: "/mailto:support@shoppire.com", label: "Contacto", icon: <SiMaildotcom /> },
  ]
  return (
    <nav className={containerStyles}>
      {/* Botón de cerrar dentro de la barra de navegación */}
      {menuOpened && (
        <>
          <FaRegWindowClose onClick={toggleMenu} className="text-xl self-end cursor-pointer relative left-8 text-secondary" />
          {/* Logo */}
          <Link to={'/'} className="bold-24 mb-10">
            <h4 className='text-secondary'>Shoppire</h4>
          </Link>
        </>
      )}
      {navItems.map(({ to, label, icon }) => (
        <div key={label} className="inline-flex">
          <NavLink
            to={to} className={({ isActive }) =>
              isActive
                ? "active-link flexCenter gap-x-2"
                : "flexCenter gap-x-2"}
                onClick={menuOpened && toggleMenu }
          >
            {icon}
            <h5>{label}</h5>
          </NavLink>
        </div>
      ))}
    </nav>
  )
}

export default Navbar