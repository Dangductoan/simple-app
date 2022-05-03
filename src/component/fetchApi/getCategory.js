export const getCategory = async (id) => {
    try {
      const res = await fetch(`http://localhost:8080/api/v1/Category/${id}`)
    const resJson = await res.json();
    const {data} = resJson
    return data;
    }
    catch (err) {
      console.log(err);
      return err;
    }
  }
  