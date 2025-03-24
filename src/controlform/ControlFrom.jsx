import { useState } from "react";

const ControlFrom=()=>{
    let[Username,setUsername]=useState('');
    let [email,setEmail]=useState('');
    let[password,setPassword]=useState('');
    function handleUsername(e){
       setUsername(e.target.value);
    }
    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }
    function formSubmit(e){
        e.preventDefault()
        console.log("form submit")
    }
    let user={
        Username,
        email,
        password
    }
    console.log(user)
    return(
        <div>
        <h1>Control from</h1>
        <form onSubmit={formSubmit}>
            <label >Username</label>
            <input type="text" value={Username}  onChange={handleUsername}/> <br />
            <label >email</label>
            <input type="email" value={email}  onChange={handleEmail}/><br />
            <label>password</label>
            <input type="password"  value={password} onChange={handlePassword}/><br />
            <button>submit</button>

        </form>
        </div>
    )
}
export default ControlFrom;