import React from 'react'
import {Link} from 'react-router-dom'
import './LeftBar.css'
import Vector from '../icons/Vector.svg'
import Explore from '../icons/Explore.svg'
import Settings from '../icons/Settings.svg'
import Logout from '../icons/Logout.svg'



function LeftBar() {
  return (
    <div className='left-bar__wrapper'>

        {/************************ LOGO AND SEARCH **********************************/}
        <div className="search-and-logo__wrapper">
            <div className="logo">
                <img src={require('../../pictures/logo.png')} alt="" />
            </div>
            <div className="search-input">
                <input type="text" placeholder='Search' />
            </div>
            </div>    
         {/**********************************************************/}



         {/************************ LEFT BAR MENU **********************************/}
        <ul className="left-bar-menu__wrapper">
            <li> <img src={Vector} alt="img" /> Home</li>
            <li><img src={Explore} alt="explore" />Explore</li>
            <li> <img src={Settings} alt="settings" /> Settings</li>
        </ul>

        {/**********************************************************/}

        
        {/************************ Log-Out-Btn **********************************/}

      <Link className='log-out-btn-link' to={'/login'}>  <button className='log-out-btn'> <img src={Logout} alt="logout" />Log out</button> </Link>


        {/**********************************************************/}


    </div>
  )
}

export default LeftBar