import React, {useState} from 'react'
import SwipeProfiles from '../Swipe_Profiles/SwipeProfiles'
import "./Feed.css"
import SortBtn from './SortBtn'
const Feed = () => {
    const [activeState, setActiveState] = useState("New")
  return (
    <div className="feed">
        <SwipeProfiles />
        <div className="sort_btns_wrapper">
          <SortBtn setActiveState={setActiveState} activeState={activeState} parent="New"/>
          <SortBtn setActiveState={setActiveState} activeState={activeState} parent="Popular"/>
          <SortBtn setActiveState={setActiveState} activeState={activeState} parent="Favourite"/>
          
        </div>
    </div>
  )
}

export default Feed