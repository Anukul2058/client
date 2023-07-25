import React, { useEffect, useState } from 'react'
import { getPostPage } from '../api';
import { useParams } from 'react-router-dom'
import formatISO9075 from 'date-fns/formatISO9075'


export default function Postpage() {
  const [postContent, setPostContent] = useState({});
  const param = useParams();

  useEffect(() => {
    getPostPage(param.id, setPostContent)

  }, [])


  return (
    <div className="whole-postpage">
      <div className="postPage">
        <div className="heading-content">
          <h2>{postContent.title}</h2>
          <span style={{color:'grey',fontWeight:'bold'}}></span>
          <span style={{fontWeight:'bold'}}>By @{postContent.authorName}</span>
        </div>
        <div className="img-section"><img src={postContent.file} alt="" /></div>
        <div className="content" dangerouslySetInnerHTML={{__html:postContent.content}}></div>
      </div>

    </div>
  )
}

