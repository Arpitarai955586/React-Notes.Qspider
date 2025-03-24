// import { useRef } from "react";

// const UncontrolledForm1=()=>{
//     console.log(useRef())
//     let emailRef=useRef();
//     let passwordRef=useRef();
//     function formSubmit(e){
//         e.preventDefault()
//         console.log("form submitted")
    
//     if (
//         emailRef.current.value.trim() !== "" && passwordRef.current.value.trim() !== ""
//       ) {
//         let user = {
//           email: emailRef.current.value,
//           password: passwordRef.current.value,
//         };
//         console.log(user);
//       } else {
//         alert("empty form fields");
//       }
  
//       emailRef.current.value = "";
//       passwordRef.current.value = "";
//     }

//     return(
//         <div>
//            <h1>Un controlled form </h1>
//            <form onSubmit={formSubmit}>
//             <label >Email:</label>
//             <input type="email" ref={emailRef} /><br />
//             <br />
//             <label >password:</label>
//             <input type="password"  ref={passwordRef}/><br />
//             <br />
//             <button>submit</button>
//            </form>
//         </div>
//     )
// }
// export default UncontrolledForm1;
import { useRef } from "react"; 
const RefExample = () => { 
// console.log(useRef()); // {current: undefined} 
let demoRef = useRef(); 
// Creating dummy of useRef() 
console.log(demoRef); 
function change() { 
console.log(demoRef); 
demoRef.current.style.backgroundColor = "Red"; 
demoRef.current.style.color = "Yellow"; 
} 
return ( 
<div> 
<h1 ref={demoRef}>Refs</h1> 
<button onClick={change}>Click</button> 
</div> 
); 
}; 
export default RefExample; 