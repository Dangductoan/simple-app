import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {user} from './index'

function Home() {
   const navigate = useNavigate();
   const [name,setName] = useState('');
   const [password,setPassword] = useState('');
   const [isName,setIsName] = useState(false);
   const [isPassword,setIsPassword] = useState(false)
   const [isUser,setIsuser] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
    if(name !== user.name) {
        setIsName(!isName);
    }
    
    if(password !== user.password) {
        setIsPassword(!isPassword);
    }
   
    if(name === user.name && password === user.password) {
        setIsuser(!isUser);
    }
    if(isUser) {
        navigate('/categories')
    }
       
    }
    //change input name
    const handleChangeName =(e) => {
        setName(e.target.value);
              
        
    }
    // change input password
    const handleChangePassword =(e) => {
        setPassword(e.target.value);
       
        
    }
    //check value name,password
  
    
    
  return (
    <div className="container">
        <form action="">
            <h1>Login Form</h1>
            <div className="ui-form">
                <div className="field">
                    <label htmlFor="">UserName</label><br></br>
                    <input type="text" name="username" placeholder="Username"
                     value={name}
                     onChange={handleChangeName}
                     />
                </div>
                 {isName && <div style={{color:'red'}}>userName không đúng</div>}
                <div className="field">
                    <label htmlFor="">Password</label><br></br>
                    <input type="password" name="password" placeholder="Password"
                    value={password}
                    onChange={handleChangePassword} 
                    /> 
                 {isPassword && <div style={{color:'red'}}>Password không đúng</div>}

                </div>
                <button onClick={handleClick}className="btn ">submit</button>
            </div>
        </form>
       
    </div>
  )
}

export default Home