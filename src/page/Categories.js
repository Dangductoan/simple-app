import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import {getAllCategory } from '../component/fetchApi/getAllCategory'
import { deleteCategory } from '../component/fetchApi/deleteCategory';
import Pagination from '../component/pagination/Pagination'
import ButtonCreate from '../component/btn/ButtonCreate'
function Categories() {
  const [categories,setCategories] = useState([])
  const [page,setPage] = useState(1);
  const totalPage = categories.length / 4;
  
  const endIndex = page * 4;
  const startIndex = endIndex - 4;
   useEffect(() => {
    
    getAllCategory()
      .then(data => setCategories(data));
   },[])
  
   const handleClick = (id) => {
     deleteCategory(id)
     getAllCategory()
     .then(data => setCategories(data));
   }
  

  
  return (
    <div className="Categories">
      <ButtonCreate/>
        <h3>Danh sách sản phẩm </h3>
        <ul  className="Categories-list">
           {categories.slice(startIndex,endIndex).map(category => (
          
             <li key={category.id} style={{listStyle:'none'}}>
              <Link style={{textDecoration:'none',color:'red'}}to={`/Categories/${category.id}`}>
              {category.categoryName}
              </Link>
              <span style={{paddingLeft:'10px',cursor:'pointer'}} onClick={() => handleClick(category.id)}>x</span>
              
               </li>
               
           ))}
        </ul>
        <Pagination   page={page} setPage={setPage} totalPage={totalPage}/>
    </div>
  )
}

export default Categories