import React from "react";
import {
    Form, Button
} from "reactstrap";
const Signup = () => {
    return (
        <div id="up">
            <Form id="fill">
                <table>
                    <tr>
                        <td><label for="fname"><>first name :</></label></td>
                        <td><input type="text" placeholder="first name" name="fname" required /></td>
                        <br></br>
                        <br></br>
                    </tr>
                    <tr>
                        <td><label for="lname"><>Last name :</></label></td>
                        <td><input type="text" placeholder="Last name" name="lname" required /></td>
                        <br></br>
                        <br></br>
                    </tr>
                </table>
                <label for="dob"><>DOB :</></label>
                <input type="date" name="dob"></input> <br></br>
                <hr></hr>
                <table>
                    <tr>
                        <td><label for="unm"><>User Name</></label></td>
                        <td><input type="text" placeholder="User Name" name="unm" required /></td>
                    </tr>
                    <tr>
                        <td><label for="pswr"><>PassWord</></label></td>
                        <td><input type="password" placeholder="Password" name="pswr" required /></td>
                    </tr>
                    <tr>
                        <td><label for="email"><>EMail id</></label></td>
                        <td><input type="email" placeholder="Enter Mail" name="email" required /></td>
                    </tr>
                </table>
                <Button type="submit" id="signup" href="/">SignUp</Button>
            </Form>
        </div>
    )
}
export default Signup;