import React,{useState,useEffect} from 'react'

function Form({id,callback}) {
    const [name,setName] = useState()
    const [code,setCode] = useState()
    const [desc,setDesc] = useState()
    const [dateCreate,setDateCreate] = useState()
    const [dateFixed,setDateFixed] = useState()

    const data = {
        id:id,
        categoryName: name,
        category_code:code,
        descreption:desc,
        date_created:dateCreate,
        date_fixed:dateFixed,
    }
    const handleClick= () => {
       
       
       
        callback(data)
        
    }
    
   
   
  return (

    <div className="form" style={{display: 'flex', flexDirection: 'column',alignItems: 'center',marginTop:'20px'}} >
      <label htmlFor="">Category_name</label> 
      <input type="text" onChange ={(e) => setName(e.target.value) } />
      <label htmlFor="">Category_code</label>
      <input type="number" onChange ={(e) => setCode(e.target.value) } />
      <label htmlFor="">descreption</label>
      <input type="text" onChange ={(e) => setDesc(e.target.value) } />
      <label htmlFor="">date_created</label>
      <input type="date" onChange ={(e) => setDateCreate(e.target.value) } />
      <label htmlFor="">date_fixed</label>
      <input type="date" onChange ={(e) => setDateFixed(e.target.value) } />
      <button onClick={handleClick}>Save</button>
    </div>
    
  )
}

export default Form