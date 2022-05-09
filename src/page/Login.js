import {useState,useEffect} from 'react'
import {useAuth} from '../component/context/Auth'  
import { useNavigate } from 'react-router-dom'
export const Login = () => {
    const navigate = useNavigate()
    const auth = useAuth()
    const [user,setUser] = useState({})
    const [name,setName] = useState('')
    const [show,setShow] = useState(false)
    const [password,setPassword] = useState('')
    
    useEffect(() => {
        setUser({name:name,password:password})
    },[name,password])
    const handleLogin = () => {
         auth.login(user) ?
         navigate('/categories') :
         setShow(!show)
    }
    

  return (
    <div>
        <label htmlFor="">
            userName:<input type='text' onChange={(e) => setName(e.target.value)} />
        </label><br></br>
        <label htmlFor="">
            passWord:<input type='password' onChange={(e) => setPassword(e.target.value)} />
        </label><br></br>
        <button onClick={handleLogin}>Login</button>
        {show && <h3>Tai khoan hoac mat khau sai </h3>}
    </div>
  )
}
