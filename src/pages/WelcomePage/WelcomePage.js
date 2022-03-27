import React from 'react'
import './WelcomePage.css'



function WelcomePage() {
  return (
    <div className="welcome-page__wrapper">
     
     <div className="welcome-logo">
        <div className="logo-text">
        <h1 className='firstH1'>Share your lifestyle </h1>
        <h1 className='secondH1'> and fee safe</h1>
        </div>
      </div>
      


      <div className="welcome-right__wrapper">
      <div className="welcome-right__content">
        <div className="welcome-right__header">
          <h1>Welcome to</h1>
          <h1>Bnollar</h1>
          

        </div>
      <div className="welcome-right__buttons">
             <button className='welcome-seign-in'>Sign in</button> 
             <button className='welcome-register'>Register</button> 
           </div>
     </div>
      </div>
    </div>
  )
}

export default WelcomePage