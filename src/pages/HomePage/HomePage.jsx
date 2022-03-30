import React from 'react'
import Feed from '../../components/FeedComponents/Feed/Feed'
import "./HomePage.css"
import Container from '../../components/Container/Container'
import LeftBar from '../../components/Left-right-bar-components/LeftBar'
import Post from '../../components/PostComponents/Post'
const HomePage = () => {
  return (
    <div className="home_page_wrapper">
      <Container>
        <LeftBar />
        <div className="center-content__wrapper">
        <Feed/>
         <Post />
        </div>
        <LeftBar /> 
      </Container>
    </div>
  )
}

export default HomePage