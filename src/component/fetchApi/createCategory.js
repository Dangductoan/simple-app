export const createCategory = async (data) => {
    const options={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(data)

    }
    try {
      const res = await fetch('http://localhost:8080/api/v1/Category/insert/',options)
      const resJson = await res.json();
      console.log("update successfully")
      return resJson;
     
    }
    catch (err) {
      console.log(err);
      
    }
  }