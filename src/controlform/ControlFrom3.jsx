import { useState } from "react";

const ControlFrom3=()=>{
    let [userData,setUserData]=useState({
        username:"",
        email:"",
        password:""
    })
    function handleValue(e){
    let {name,value}=e.target;
    setUserData({...userData,[name]:value})
     }
     function handleSubmit(e){
        e.preventDefault();
      console.log(userData)
    //  clearning the input field 
   setUserData({
    username:"",
    email:"",
    password:""

   })
    
     }
  
    return(
        <div>
            <h1>Control from </h1>
            <form action="" onSubmit={handleSubmit} >
                <tr>
                    <td><label htmlFor="">username:</label></td>
                    <td><input type="text" name="username"  onChange={handleValue} value={userData.username} /> <br /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">email:</label></td>
                    <td><input type="email" name="email"  onChange={handleValue} value={userData.email}/> <br /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">password:</label></td>
                    <td><input type="password" name="password"  onChange={handleValue} value={userData.password}/> <br /></td>
                </tr>
                <tr>
                    <button type="submit">submit</button>
                </tr>
                
             
                
            </form>
        </div>
    )
}
export default ControlFrom3;
