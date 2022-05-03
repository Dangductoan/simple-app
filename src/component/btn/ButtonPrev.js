import React from 'react'
import {useNavigate} from 'react-router-dom'

function ButtonPrev() {
  const navigate = useNavigate();

    const handleClick = () => {
        navigate('/categories')
      }
  return (
    <button onClick={handleClick}>Turn Back</button>
    
  )
}

export default ButtonPrev