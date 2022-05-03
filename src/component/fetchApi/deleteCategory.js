import React from 'react'

export const deleteCategory = async (id) => {
    const options={
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'

        },
       

    }
    try {
      const res = await fetch(`http://localhost:8080/api/v1/Category/${id}`,options)
      const resJson = res.json();
      console.log("delete successfully")
      return resJson;
     
    }
    catch (err) {
      console.log(err);
      return err;
    }
  }