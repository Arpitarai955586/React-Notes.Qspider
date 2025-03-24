import { useState } from "react";

const From =()=>{
    let [username, setUsername]=useState('')
    let [email ,setEmail]=useState('')
    let [password,setPassword]=useState('')
     function handleUsername(e){
       setUsername(e.target.value)
     }
     function handleEmail(e){
        setEmail(e.target.value)
      }
      function handlePassword(e){
        setPassword(e.target.value)
      }
      function  FromSubmit(e){
            e.preventDefault();
          console.log("submitted")
      }
      let user={
        username,
        email,
        password
      } 
      console.log(user)
    return(
        <div>
        <h1>REGISTER FROM</h1>
        <form action="" onClick={FromSubmit}>
                <label htmlFor="">Username:</label>
                <input type="text" onChange={handleUsername} value={username} />  <br />  
                
                <label htmlFor="">Email:</label>
                <input type="text" onChange={handleEmail}  value={email}/><br />
               
                <label htmlFor="">Password:</label>
                <input type="password" onChange={handlePassword}  value={password}/>
                <br />
                 
                 <button>submit</button>
            
        </form>
        </div>
    )
}
export default From;
