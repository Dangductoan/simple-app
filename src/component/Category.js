import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router';
import CategoryDetail from'./CategoryDetail';
import {getCategory} from '../component/fetchApi/getCategory'
import ButtonPrev from '../component/btn/ButtonPrev'
function Category() {
  const {id} = useParams();
  const [category,setCategory] = useState({})
  useEffect(() => {
      
      getCategory(id)
      .then(data => setCategory(data));
      
  },[id])
  
  
    
  return (
   <div>
     <ButtonPrev/>
     <CategoryDetail data={category} setData={setCategory}/>
   </div>
  )
}

export default Category