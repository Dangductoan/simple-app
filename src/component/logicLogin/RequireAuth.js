import React from 'react'
import {Navigate} from 'react-router-dom'
import {useAuth} from '../context/Auth'
export const RequireAuth = ({ children}) => {
 const auth = useAuth()
 if(!auth.user) {
     return <Navigate to='/login'/>
 }
 return children
}
