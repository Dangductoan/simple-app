import React from 'react'
import Form from '../component/Form'
import {createCategory} from '../component/fetchApi/createCategory'
function CreateCategory() {
    const callback = (data) =>{
        createCategory(data)
    }
  return (
    <>  
    
     <Form callback={callback}/>
    </>
  )
}

export default CreateCategory