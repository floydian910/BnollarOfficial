import React from 'react'
import './RightBar.css'

import {Chatt} from '../icons/Chatt.svg'
import Contacts from './Contacts'

function RightBar() {
  return (
    <div className='right-bar__wrapper'>
        <div className="right-navbar__wrapper">
            <div className="upload">
             
        <input type="file" accept='image/*' id='file' />
        <label className='upload-label' htmlFor="file">Upload</label>
            </div>

            <div className="right-navbar-icons">
             bell chat
            </div>

            <div className="right-profile-img">
                <img src="https://res.cloudinary.com/dzxxb95vy/image/upload/v1648466490/Ellipse_1_ztlkcf.png" alt="asdas" />
            </div>
        </div>

           <Contacts />


    </div>
  )
}

export default RightBar