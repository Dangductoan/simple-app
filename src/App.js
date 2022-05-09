import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './page/Home';
import Categories from './page/Categories';
import Category from './component/Category';
import Navbar from './component/navbar/Navbar'
import CreateCategory from './page/CreateCategory';
import {Login} from './page/Login'
import {RequireAuth} from './component/logicLogin/RequireAuth'
import {AuthProvider} from './component/context/Auth'

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/categories" element={<RequireAuth><Categories/></RequireAuth>}/>
        <Route path="/categories/:id" element={<RequireAuth><Category/></RequireAuth>}/>
        <Route path="/categories/create" element={<RequireAuth><CreateCategory/></RequireAuth>}/>
        

          
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
