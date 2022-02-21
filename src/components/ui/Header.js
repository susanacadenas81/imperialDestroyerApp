import { BiLogInCircle } from 'react-icons/bi'
import { GiDeathStar } from 'react-icons/gi'

import './styles/header.css'


export const Header = () => {
  return (
    <header>
      <i className='deathstar-icon-wrapper'><GiDeathStar className='deathstar-icon' /></i>
        <div className='title'>Destroyers App</div>
        <i className='log-in-icon-wrapper'><BiLogInCircle className='log-in-icon'/></i>
    </header>
  )
}
