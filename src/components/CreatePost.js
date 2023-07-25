import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { createPost } from '../api';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../LoginContext'



const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
}

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
]


export default function CreatePost() {
  const navigate = useNavigate()
  const {userInfo} = useContext(LoginContext)
  const[postData,setData] = useState({title:'',file:'',content:'',authorId:userInfo.userid,authorName:userInfo.username})
  const[Content,setContent] = useState('')
  function handlechange(e){
    const data = e.target.value;
    const at = e.target.name;
    setData({...postData,[at]:data})
  }
  function handlesubmit(e){
    postData.content = Content
    e.preventDefault();
    createPost(postData,navigate)

  }
  return (
    <div className='createpost'>
      <h1>Create New Post</h1>
      <form onSubmit={handlesubmit}>
        <input type="title" placeholder='title' name='title' value={postData.title} onChange={handlechange}/>
        
        <input type="url" name='file' value={postData.file} onChange={handlechange} placeholder='Insert your image url' />
        <div>
          <ReactQuill  modules={modules}  formats={formats} value ={Content} onChange={setContent}  />


        </div>
        <button style={{ marginTop: '1vh',marginBottom:'2vw',backgroundColor:'blue',color:'white'}} type='submit'>Create</button>


      </form>
    </div>
  )
}
