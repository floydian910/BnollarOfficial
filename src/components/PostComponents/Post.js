import React from 'react'
import './Post.css'
import {PostData} from './PostData'


function Post() {
  return (
    <div className='post-main__wrapper'>
            {PostData.map((post) => {

                    return (<>
                            <div className="post-content">
                            <div className="post-header">
                            <div className="post-profile-image">  
                             <img src={post.profileImg} alt="image" />
                            </div>
                            <div className="name-and-nick">
                         
                                <h3>{post.name}</h3>
                            
                             
                                    <p>{post.nickName}</p>
                        
                                </div>
                            </div>
                        
                            <div className="post-main-img">
                            <img src={post.img} alt="img" />
                        </div>
                        </div>
                      
                        </>

                    )

            })}
    </div>
  )
}

export default Post