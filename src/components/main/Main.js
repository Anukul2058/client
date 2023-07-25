import React, { useEffect, useState } from 'react'
import Post from './Post'
import { getPost } from '../../api'
import { LoginContext } from '../../LoginContext'
import { useContext } from 'react'

export default function Main() {
  const {userInfo} = useContext(LoginContext)
  const [posts, setPosts] = useState([])
  useEffect(() => {
    getPost(setPosts);


  }, [])
  const name = userInfo?.username
  // console.log(Posts)
  const data = posts.map(item => {
    return <Post {...item} />
  })
  // console.log(data)
  return (
    <div className='main1'>
      <div className="hero">
        <div className='hero-title'>"Blogosphere: Welcome {name} !"</div>
        <p>Welcome to Blogosphere – a place where ideas soar and knowledge thrives! Our website is dedicated to curating and delivering the most enlightening and thought-provoking blogs across a wide range of topics.Discover a treasure trove of articles written by passionate writers, experts, and enthusiasts from around the world. Whether you're interested in technology, art, travel, health, or any other subject under the sun, we've got you covered.
        Are you ready to embark on a journey of knowledge and discovery? Step into the world of Blogosphere, and let your mind take flight!
        </p>
      </div>
      <div className="content-div">
        <div className="featured">Featured Articles</div>
      {data}

      </div>

      


    </div>
  )
}
