import React, {useState, useEffect} from 'react'

const SortBtn = ({parent, setActiveState, activeState}) => {
    const [active, setActive] = useState(parent === activeState)
   
    const changeActive = () => {
  
        setActiveState(parent)
    }
  return (
    <>
    {active ?
        <button id="activeSort" onClick={() => setActive(!active)}>{parent}</button> :
        <button  onClick={() => changeActive()}>{parent}</button>
    }
    </>
  )
}

export default SortBtn