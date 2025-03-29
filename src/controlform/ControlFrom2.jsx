import { useState } from "react";

const ControlFrom2=()=>{
    let [userData,setUserData]=useState({
        username:"",
        email:"",
        password:""
    })
    function handleChange(e){
        let {name,value}=e.target;
        setUserData({...userData,[name]:value})
    }
    function formSubmit(e){
        e.preventDefault();
        console.log(userData)

        // clearning input field
    setUserData({
        username:"",
        email:"",
        password:""
    });
    }
    
    return(
     <div>
        <h1>Controlled From 2</h1>
        <form action="" onSubmit={formSubmit}>
            <label >Username</label>
            <input type="text"  name="username" value={userData.username}  onChange={handleChange}/><br />
            <label >Email</label>
            <input type="text"  name="email" value={userData.email} onChange={handleChange} /><br />
            <label >Password</label>
            <input type="text" name="password" value={userData.password} onChange={handleChange}/><br />
            <button type="submit">submit</button>

        </form>
     </div>
    )
}
export default ControlFrom2;