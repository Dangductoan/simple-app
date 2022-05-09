import React from 'react'
import {NavLink} from 'react-router-dom'
import {useAuth} from '../context/Auth'
function Navbar() {
  const auth = useAuth()
  const handleLogout = () => {
       auth.logOut()
  }
  return (
    <div className="nav" style={{height: '30px',background: '#ccc',display:'flex',alignItems: 'center'}}>
       <NavLink style={{padding: '10px'}} to='/'>Home</NavLink>
       {!auth.user && <NavLink  style={{padding: '10px'}} to='/login'>Login</NavLink>}
      {auth.user && <NavLink style={{padding: '10px'}} to='/' onClick={handleLogout}>Logout</NavLink>}
    </div>
  )
}

export default Navbar