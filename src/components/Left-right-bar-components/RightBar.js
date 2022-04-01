import React from 'react'
import './RightBar.css'

import Chat from '../icons/Chat.svg'
import Contacts from './Contacts'
import TopNfts from './TopNfts'
import {HiBell} from 'react-icons/hi'

function RightBar() {
  return (
    <div className='right-bar__wrapper'>
        <div className="right-navbar__wrapper">
            <div className="upload">
             
        <input type="file" accept='image/*' id='file' />
        <label className='upload-label' htmlFor="file">Upload</label>
            </div>

            <div className="right-navbar-icons">
              <a className='bell-icon' href="/"><HiBell />  </a>
             <a className='chat-icon' href="/"><img src={Chat} alt="chat" /></a> 
            </div>

            <div className="right-profile-img">
               <a href='/'><img src="https://res.cloudinary.com/dzxxb95vy/image/upload/v1648466490/Ellipse_1_ztlkcf.png" alt="asdas" /></a>
            </div>
        </div>
          <div className="contacts-topnfts-wrapper">
           <Contacts />
           <TopNfts />
           </div>


    </div>
  )
}

export default RightBar