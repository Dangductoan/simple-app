const users =[
    {id:1, name:'toan','password':'123456'},
    {id:2,name:'van',password:'1234567'},
    {id:3,name:'hung','password':'12345678'}
]
export const checkLogin = (data) => {
  return (
      users.some(user => user.name === data.name && user.password === data.password)
  )
  
}
