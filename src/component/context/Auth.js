import { createContext, useState,useContext } from "react";
import {checkLogin} from '../logicLogin/checkLogin'
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
    return checkLogin(user)
  };
  const logOut = (user) => {
    setUser(null);
  };
  return(
  <AuthContext.Provider value={{ user, login, logOut }}>
    {children}
  </AuthContext.Provider>
  )
  
};
export const useAuth = () =>{
    return useContext(AuthContext)
}
 