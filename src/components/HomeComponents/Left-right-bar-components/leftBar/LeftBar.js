import React from 'react'
import {Link} from 'react-router-dom'
import './LeftBar.css'
import './LeftBarResponsive.css'
import Home from '../../icons/Home.svg'
import Explore from '../../icons/Explore.svg'
import Settings from '../../icons/Settings.svg'
import Logout from '../../icons/Logout.svg'
import logo from '../../icons/logo.svg'



function LeftBar() {
  return (
    <div className='left-bar__wrapper'>

        {/************************ LOGO AND SEARCH **********************************/}
        <div className="search-and-logo__wrapper">
            <div className="logo">
                <a href='/'><img src={logo} alt="" /></a>
            </div>
            <div className="search-input">
                <input type="text" placeholder='Search' />
            </div>
            </div>    
         {/**********************************************************/}



         {/************************ LEFT BAR MENU **********************************/}
        <ul className="left-bar-menu__wrapper">
            <li> <a href="/"><img src={Home} alt="img" /><span className="resp">Home</span> </a> </li>
            <li><a href="/"><img src={Explore} alt="explore" /> <span className="resp">Explore</span></a></li>
            <li> <a href="/"><img src={Settings} alt="settings" /> <span className="resp">Settings</span></a></li>
            <li><Link className='log-out-btn-link' to={'/login'}>  <button className='log-out-btn'> <img src={Logout} alt="logout" /> <span className="resp">Log out</span> </button> </Link>

</li>
        </ul>

        {/**********************************************************/}

        
        {/************************ Log-Out-Btn **********************************/}

      
        {/**********************************************************/}


    </div>
  )
}

export default LeftBar