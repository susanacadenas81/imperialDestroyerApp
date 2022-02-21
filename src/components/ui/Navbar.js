import './styles/navbar.css'
import { FaRocket, FaCarSide, FaChild, FaGlobe } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
      <>
    <div className="sidenav">
      <div className="logo">
        <img src="/assets/icons/100729_0.png" alt=""/>
      </div>
      <ul className="mainNav">
        <li className="single-nav">
          <NavLink to="/">
            <i className="fa"><FaGlobe /></i>
            <span>Planets</span>
          </NavLink>
        </li>
        <li className="single-nav">
          <NavLink to="/starships">
            <i className="fa"><FaRocket /></i>
            <span>Starships</span>
          </NavLink>
        </li>
        <li className="single-nav">
          <NavLink to="/people">
            <i className="fa"><FaChild /></i>
            <span>People</span>
          </NavLink>
        </li>
        <li className="single-nav">
          <NavLink to="/vehicles">
            <i className="fa"><FaCarSide /></i>
            <span>Vehicles</span>
          </NavLink>
        </li>

      </ul>

    </div>

 </>
  )
}
