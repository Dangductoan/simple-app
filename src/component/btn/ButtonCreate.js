import React from 'react'
import {useNavigate} from 'react-router-dom'
function ButtonCreate() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/categories/create')
    }
  return (
    <button onClick={handleClick}>Create </button>
  )
}

export default ButtonCreate