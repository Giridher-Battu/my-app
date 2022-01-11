import React, { useState } from "react";
import {
  Button, Form,
} from "reactstrap";
import Navi from "./Navi";


const Login = () => {
  const [values, setValues] = useState({
    uname: '',
    psw: ''
  })
  const display = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const details = { ...values };
    details[fieldName] = fieldValue;

    setValues(details);
  }
  const [hi, setHi] = useState(true)
  return (
    <div>
      {(hi && <div id="log">
        <Form id="logi" >
          <img src="https://i.pinimg.com/originals/c8/cf/00/c8cf00204350f1cc15d2e3f18e2f746f.png" alt="logos" />
          <h2 id="head"> log in</h2>
          <div id="user">
            <label for="uname"><b>Username</b></label><br></br>
            <input type="text"
              placeholder="Enter Username"
              name="uname"
              required="required"
              onChange={display}
            >
            </input>
            <br></br>

            <label for="psw"><b>Password</b></label><br></br>
            <input type="password"
              placeholder="Enter Password"
              name="psw"
              required="required"
              onChange={display}
            >
            </input>
            <br></br>
            <br></br>
          </div>

        </Form>
        <Button type="submit" id="view" id="login" onClick={
          () => {
            setHi(false)
          }
        }  >Login</Button>
        <hr></hr>
        <Button type="submit" id="sign" href="/Signup">Register</Button>

      </div>
      )}
      {(
        !hi && <Navi Name={values.uname} />
      )}

    </div>
  );
}

export default Login;