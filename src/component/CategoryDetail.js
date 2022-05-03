import React,{useState} from 'react'
import Form from './Form'
import {updateCategory} from '../component/fetchApi/updateCategory'
import {getCategory} from '../component/fetchApi/getCategory'
function CategoryDetail({data,setData}) {
  const [show,setShow] = useState(false)
  const handleClick = () => {
    setShow(!show)
  }
  const callback = (data) => {
    updateCategory(data.id,data)
     getCategory(data.id)
        .then(data => setData(data) )
       
        setShow(!show)
  }
  return (
    <>
    <div className="categoryDetail">
    <h3>category_name:{data.categoryName}</h3>
     <span>category_code:{data.category_code}</span>
     <p>descreption:{data.descreption}</p>
     <span>date_created:{data.date_created}</span><br></br>
     <span>date_fixed:{data.date_fixed}</span>

    </div>

    <div className="for">
      <button style={{marginTop:'20px'}} onClick={handleClick}>Update</button>
      {show && <Form id={data.id} callback={callback}/>}
    </div>

    </>
  )
}

export default CategoryDetail