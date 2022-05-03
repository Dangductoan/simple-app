import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './page/Home';
import Categories from './page/Categories';
import Category from './component/Category';
import Navbar from './component/navbar/Navbar'
import CreateCategory from './page/CreateCategory';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/categories/:id" element={<Category/>}/>
        <Route path="/categories/create" element={<CreateCategory/>}/>
        

          
      </Routes>
     
    </div>
  );
}

export default App;
