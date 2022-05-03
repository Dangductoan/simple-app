export const getAllCategory = async () => {
    try{
     const res = await fetch('http://localhost:8080/api/v1/Category/')
     const resJson = await res.json();
     console.log(resJson)
     return resJson;

    }
    catch (err) {
      console.error(err)
      return err;
    }
  }