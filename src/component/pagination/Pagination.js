import React, { useState } from "react";

function Pagination({ page,setPage ,totalPage}) {
  
  const sendDataPrev = () => {
      if(page>1) {
      setPage(page -1)
        
      }
       
     }
   
  
  const sendDataNext = () => {
        if(page<totalPage) {
          setPage(page + 1)

        }

      
      

  }
    
  
  return (
    <div className="btn">
      <button onClick={sendDataPrev}>prev</button>
      <button onClick={sendDataNext}>next</button>
    </div>
  );
}

export default Pagination;
