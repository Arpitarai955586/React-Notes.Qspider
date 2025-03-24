import { useRef } from "react";

const UncontrolledForms = () => {
  // console.log(useRef());//{current: undefined}

  let emailRef = useRef(); //{current: {value:"abcd"}}
  let passwordRef = useRef(); //{current: input}

  function formSubmit(e) {
    e.preventDefault();
    console.log("form submitted");

    if (
      emailRef.current.value.trim() !== "" &&
      passwordRef.current.value.trim() !== ""
    ) {
      let user = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      console.log(user);
    } else {
      alert("empty form fields");
    }

    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  return (
    <div>
      <h1>Uncontrolled Forms</h1>
      <form onSubmit={formSubmit}>
        <label>Email :</label>
        <input type="email" ref={emailRef}  />

        <br />
        <br />

        <label>Password :</label>
        <input type="password" ref={passwordRef} />

        <br />
        <br />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UncontrolledForms;