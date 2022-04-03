import React, {useState} from 'react'
import SwipeProfiles from '../Swipe_Profiles/SwipeProfiles'
import "./Feed.css"
import SortBtn from './SortBtn'
const Feed = () => {
  
     

       

      


        const sortBtn = [
          'New',
          'Popular',
          'Favourite'
      ]


   
      
    
     const [activeState,setActiveState] = useState('Popular')



      const active =()=> {
        setActiveState('Favourite')
        console.log(activeState)
      }
           
  return (
    <div className="feed" >
     
        <SwipeProfiles  />
        
        <div className="sort_btns_wrapper"  > 
        <div className="sort-btn" onClick={()=> setActiveState('New')}> <SortBtn  className='sort-btn' setActiveState={setActiveState} activeState={activeState}  parent="New"/></div>
         <div className="sort-btn"  ><SortBtn className='sort-btn' setActiveState={setActiveState} activeState={activeState}  parent="Popular"/></div>
          
        <div className="sort-btn" onClick={active} ><SortBtn className='sort-btn' setActiveState={setActiveState} activeState={activeState}  parent="Favourite"/></div>
      
        </div>
    </div>
  )
}

export default Feed