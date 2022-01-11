import React, { useState } from "react";
import {
    Button, Table
} from "reactstrap";
import Add from "./Add";

import { nanoid } from "nanoid"


const Table2 = () => {

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
        //close(true)

    }

    const [users, addUsers] = useState([]);

    const [list, addList] = useState({
        Name: '',
        Gender: '',
        mode: '',
        city: ''
    })
    const handleListChange = (event, val) => {




        if (val === "city") {
            const fieldValue = Array.from(event.target.selectedOption, option => option.value)
            addList({ ...list, [val]: fieldValue });
            console.log(fieldValue);
        }
        else {
            const fieldValue = event.target.value
            addList({ ...list, [val]: fieldValue });
            console.log(fieldValue);


        }
    }

    const handleListSubmit = (event) => {
        event.preventDefault()

        const newUser = {
            id: nanoid(),
            Name: list.Name,
            Gender: list.Gender,
            mode: list.mode,
            city: list.city
        };
        const newUsers = [...users, newUser];
        addUsers(newUsers);
        addList({
            Name: '',
            Gender: '',
            mode: '',
            city: ''
        })
        setHlo(false)
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

                >Logout</Button>
                <Button type="submit" id="Addme" onClick={() => {
                    openModal({}, "Add")
                }}
                >Add</Button>

                <Table>
                    <thead>
                        <tr>
                            <th> Name </th>
                            <th> Gender </th>
                            <th> Mode </th>
                            <th> Location </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, fry) =>
                            (

                                <tr>
                                    <td> {user.Name} </td>
                                    <td> {user.Gender} </td>
                                    <td> {user.mode} </td>
                                    <td> {user.city} </td>
                                    <td><Button type="button" onClick={() => {
                                        openModal(user, "Edit", fry)
                                    }}>Edit</Button></td>
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
                    label1="Name"
                    label2="Gender"
                    label3="mode"
                    label4="Location"
                    users={users}
                    addUsers={addUsers}
                    list={list}
                    addList={addList}
                    openModal={openModal}
                    closeModal={closeModal}
                    mode={mode}
                    handleListChange={handleListChange}
                    handleSubmit={handleListSubmit}
                    handleDelete={handleDelete} />
            }
        </div>
    );
}
export default Table2;