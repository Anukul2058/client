import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../LoginContext'
import { useContext } from 'react'


export default function Header() {
  const { userInfo,setUserInfo } = useContext(LoginContext)
  console.log(userInfo)
 async function logout(){
    await alert("Are you sure?")
    setUserInfo(null)
  }

  return (
    <div className='header'>
      <div className="heading"><Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Blogosphere</Link></div>
      {userInfo && (
        <div className="menu">
          <Link to='/create' style={{ textDecoration: 'none', color: 'black' }}>CREATE POST</Link>
          <a style={{ textDecoration: 'none', color: 'black' }} onClick={logout}>Log Out</a>


        </div>

      )}
      {!userInfo && (
        <div className="menu">
          <Link to='/login' style={{ textDecoration: 'none', color: 'black' }}>Login</Link>
          <Link to='/register' style={{ textDecoration: 'none', color: 'black' }}>Register</Link>

        </div>


      )}

    </div>
  )
}
