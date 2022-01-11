import React from "react";
import {
    Button, Table
} from "reactstrap";
import "./cm.css";

import { useState } from "react";
import Add from "./Add";
import { nanoid } from "nanoid"








const Table1 = () => {
    const [hlo, setHlo] = useState(false)


    const [mode, setMode] = useState(null)

    const [fora, fore] = useState(null)

    function openModal(ob, mod, apt) {
        addList(ob);
        setHlo(true);
        setMode(mod)
        fore(apt);
        console.log(list);
        console.log(ob)

    }
    function closeModal() {
        setHlo(false);

    }

    const [users, addUsers] = useState([]);



    const [list, addList] = useState({
        userName: '',
        role: '',
        phnNumber: '',
        email: ''
    })



    const [validName, setvalidName] = useState(false)
    const [invalidName, setInvalidName] = useState(false)

    const [validRole, setvalidRole] = useState(false)
    const [invalidRole, setInvalidRole] = useState(false)

    const [validPhnno, setvalidPhnno] = useState(false)
    const [invalidPhnno, setInvalidPhnno] = useState(false)

    const [validEmail, setvalidEmail] = useState(false)
    const [invalidEmail, setInvalidEmail] = useState(false)

    const handleListChange = (event, val) => {

        const fieldValue = event.target.value
        addList({ ...list, [val]: fieldValue });
        console.log(list);



        switch (val) {
            case 'userName':
                (fieldValue.length >= 3 && fieldValue.length <= 20) ? setvalidName(true) : setInvalidName(true)

                break;
            case 'role':
                (fieldValue.length >= 3 && fieldValue.length <= 20) ? setvalidRole(true) : setInvalidRole(true)
                break;
            case 'phnNumber':
                let regex = new RegExp('[0-9]{10}');
                regex.test(fieldValue) ? setvalidPhnno(true) : setInvalidPhnno(true)
                break;
            case 'email':

                regex = new RegExp('[A-Za-z0-9]+@[a-z]+.[a-z]{2,3}');
                regex.test(fieldValue) ? setvalidEmail(true) : setInvalidEmail(true)

                break;
            default:
                break;

        }



    }



    const handleListSubmit = (event) => {
        event.preventDefault()


        const newUser = {
            id: nanoid(),
            userName: list.userName,
            role: list.role,
            phnNumber: list.phnNumber,
            email: list.email
        };
        const newUsers = [...users, newUser];
        addUsers(newUsers);
        addList({
            userName: '',
            role: '',
            phnNumber: '',
            email: ''
        })
        setHlo(false)
        console.log(users)

    }
    const handleFormSubmit = (event) => {
        event.preventDefault()

        const editedUser = {
            id: list,
            userName: list.userName,
            role: list.role,
            phnNumber: list.phnNumber,
            email: list.email
        }
        const newUsers = [...users]

        newUsers[fora] = editedUser;

        addUsers(newUsers);
        setHlo(false)
        //addUsers(null)
    }

    const handleDelete = (Userid) => {
        const newUsers = [...users];

        const index = users.findIndex((user) => user.id === Userid);

        newUsers.splice(index, 1);

        addUsers(newUsers);
    };

    return (
        <div>
            <div style={{ paddingTop: 10 }}>

                <Button type="submit"
                    id="Logout"
                >
                    Logout
                </Button>
                <Button type="submit" id="Addme" onClick={
                    () => {
                        openModal({}, "Add")
                    }
                } >Add</Button>

                <Table>
                    <thead>
                        <tr>
                            <th> UserName </th>
                            <th> Role </th>
                            <th> PhoneNumber </th>
                            <th> Email </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, fry) =>
                            (

                                <tr>
                                    <td> {user.userName} </td>
                                    <td> {user.role} </td>
                                    <td> {user.phnNumber} </td>
                                    <td> {user.email} </td>
                                    <td><Button type="button" onClick={
                                        () => {
                                            openModal(user, "Edit", fry)
                                        }
                                    } >Edit</Button></td>
                                    <td><Button type="button" onClick={() => handleDelete(user.id)} >Delete</Button></td>
                                </tr>

                            )
                            )
                        }
                    </tbody>
                </Table>
            </div>
            {
                hlo && <Add
                    open={hlo}
                    close={setHlo}
                    label1="userName"
                    label2="Role"
                    label3="phoneNumber"
                    label4="Email"
                    users={users}
                    addUsers={addUsers}
                    list={list}
                    addList={addList}
                    validName={validName}
                    invalidName={invalidName}
                    validRole={validRole}
                    invalidRole={invalidRole}
                    validPhnno={validPhnno}
                    invalidPhnno={invalidPhnno}
                    validEmail={validEmail}
                    invalidEmail={invalidEmail}
                    handleListChange={handleListChange}
                    handleSubmit={handleListSubmit}
                    handleDelete={handleDelete}
                    mode={mode}
                    handleFormSubmit={handleFormSubmit}

                />

            }

        </div>

    );
}
export default Table1;
