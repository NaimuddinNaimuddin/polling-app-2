import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

function Header({ heading }) {
  return (
    <p style={headerClass}>
      POLLING APP
      <Link to='/login' className="link-header"> Login </Link>
      <Link to='/signup' className="link-header"> Signup </Link>
    </p>
  )
}
const headerClass = { background: 'skyblue', padding: "1%", fontSize: "1.5rem", marginTop: 0, }
export default Header