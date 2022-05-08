import React from "react";
import "./ProfilePage.css";
import Header from "../../components/Header/Header";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import Container from "../../components/HomeComponents/HomeContainer/Container";

const ProfilePage = () => {
  return (
    <div className='profile'>
      <Container className='profile-cont'>
        <Header className='profile-header' />
      </Container>
      <ProfilePicture />
      <Container>
        <ProfileInfo />
      </Container>
    </div>
  );
};

export default ProfilePage;
