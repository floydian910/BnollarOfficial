import React from 'react'
import './Post.css'
import {PostData} from './PostData'
import heart from '../icons/heart.svg'
import  Comment from '../icons/Comment.svg'
import Send from '../icons/Send.svg'
import Stroke from '../icons/Stroke.svg'



function Post() {
  return (
    <div className='post-main__wrapper'>
            {PostData.map((post) => {

                    return (<>
                            <div className="post-content">

                      {/********************** HEADER************************************/}          
                            <div className="post-header">
                            <div className="post-profile-image">  
                             <img src={post.profileImg} alt="image" />
                            </div>
                      {/**********************************************************/}





                      {/********************* NICKNAME AND NAME*************************************/}      
                            <div className="name-and-nick">
                                <h3>{post.name}</h3>
                                    <p>{post.nickName}</p>                        
                                </div>
                            </div>
                      {/**********************************************************/}  



                     {/************************ LOGO AND SEARCH **********************************/}
                            <div className="post-main-img">
                            <img src={post.img} alt="img" />
                        </div>
                        
                     {/**********************************************************/}
                        

                     
                    {/********************* POST-FUNCTIONS*************************************/}

                                <div className="post-functions">

                                        <div className="post-icons">
                                                <div className="action-icons">
                                                    <img src={heart} alt="heart" />
                                                    <img className='comment-icon' src={Comment} alt="comment" />
                                                    <img src={Send} alt="heart" />
                                                </div>

                                                <img className='stroke' src={Stroke} alt="stroke" />
                                        </div>


                                        <div className="likes-counter"> 5 likes</div>

                                </div>
                      

                      <div className="comment-wrapper">
                          <input type="text"  placeholder='Write your comment' />
                      </div>



                     </div>
                        </>

                    )

            })}
    </div>
  )
}

export default Post