import React, { useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { LoginContext } from '../LoginContext'

export default function Layout() {
  const [userInfo, setUserInfo] = useState(null)

  return (
    <LoginContext.Provider value={{ userInfo, setUserInfo }}>
      <Header />
      <Outlet />
    </LoginContext.Provider>

  )
}
