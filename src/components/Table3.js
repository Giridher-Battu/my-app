import React, { useState } from "react"
import {
    Button, Table, Input
} from "reactstrap";
import { Dropdown } from 'primereact/dropdown';
import { nanoid } from "nanoid"



const Table3 = () => {

    const [data, setData] = useState([]);

    const [add, setAdd] = useState(false)

    const [selectedCity1, setSelectedCity1] = useState('');
    const [selectName, setSelectName] = useState('');
    const [selectPhn, setSelectPhn] = useState('')

    const cities = [
        { zone: 'New York', code: 'NY' },
        { zone: 'Rome', code: 'RM' },
        { zone: 'London', code: 'LDN' },
        { zone: 'Istanbul', code: 'IST' },
        { zone: 'Paris', code: 'PRS' }
    ];

    const handleSubmit = () => {
        const newUser = {
            id: nanoid,
            name: selectName,
            city: selectedCity1,
            phnNumber: selectPhn

        };
        const newUsers = [...data, newUser];
        setData(newUsers);
        setAdd(false)
        setSelectName('')
        setSelectedCity1('')
        setSelectPhn('')

    }
    const [some, setSome] = useState(null)


    const handleEdit = (per, pla) => {
        setSelectName(per.name)
        setSelectedCity1(per.city)
        setSelectPhn(per.phnNumber)
        setSome(pla)
    }
    const handleSubmitEdit = () => {
        const editedUser = {
            name: selectName,
            city: selectedCity1,
            phnNumber: selectPhn

        };
        const newUsers = [...data];
        newUsers[some] = editedUser;
        setData(newUsers)
        setSome(null)
    }

    const handleDelete = (Userid) => {
        const newUsers = [...data];



        newUsers.splice(Userid, 1);

        setData(newUsers);
    };
    const handleCancelClick = () => {
        setSome(null)
    };

    return (
        <div>
            <div style={{ paddingTop: 10 }}>

                <Button type="submit" onClick={
                    () => {

                        setAdd(true)
                        setSelectName('')
                        setSelectedCity1('')
                        setSelectPhn('')
                    }
                }>Add</Button>
                <Table>
                    <thead>
                        <tr>
                            <th> Name </th>
                            <th> City </th>
                            <th> PhoneNumber</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user, va) =>
                                va !== some ? (

                                    <tr>
                                        <td> {user.name} </td>
                                        <td> {user.city} </td>
                                        <td> {user.phnNumber} </td>
                                        <td><Button type="submit" onClick={
                                            () => {
                                                handleEdit(user, va)
                                            }
                                        }>Edit</Button></td>
                                        <td><Button type="submit" onClick={
                                            () => {
                                                handleDelete(va)
                                            }
                                        }>Delete</Button></td>
                                    </tr>

                                ) : (<tr>
                                    <td>
                                        <Input

                                            placeholder="Enter  name"
                                            type="text"
                                            required="required"
                                            value={selectName}
                                            onChange={(e) => {
                                                setSelectName(e.target.value);
                                                console.log(selectName);
                                            }}

                                        />
                                    </td>
                                    <td>
                                        <Dropdown

                                            value={selectedCity1}
                                            options={cities}
                                            onChange={(e) => {
                                                setSelectedCity1(e.value);
                                                console.log(selectedCity1);
                                            }}
                                            optionLabel="zone"
                                            optionValue="zone"
                                            placeholder="Select a City"

                                        />
                                    </td>
                                    <td>
                                        <Input

                                            placeholder="Get In Touch"
                                            type="tel"
                                            required="required"
                                            onChange={(e) => {
                                                setSelectPhn(e.target.value);
                                                console.log(selectPhn);
                                            }}
                                            value={selectPhn}
                                        />
                                    </td>
                                    <td><Button onClick={handleSubmitEdit}>Update</Button></td>
                                    <td><Button type="submit" onClick={
                                        () => {

                                            handleCancelClick()
                                        }
                                    }>Cancel</Button></td>

                                </tr>)
                            )
                        }

                        {
                            add &&
                            <tr>
                                <td>
                                    <Input id="label1"

                                        placeholder="Enter  name"
                                        type="text"
                                        required="required"
                                        value={selectName}
                                        onChange={(e) => {
                                            setSelectName(e.target.value);
                                            console.log(selectName);
                                        }}

                                    />
                                </td>
                                <td>
                                    <Dropdown
                                        id="label2"
                                        value={selectedCity1}
                                        options={cities}
                                        onChange={(e) => {
                                            setSelectedCity1(e.value);
                                            console.log(selectedCity1);
                                        }}
                                        optionLabel="zone"
                                        optionValue="zone"
                                        placeholder="Select a City"

                                    />
                                </td>
                                <td>
                                    <Input id="label3"

                                        placeholder="Get In Touch"
                                        type="tel"
                                        required="required"
                                        onChange={(e) => {
                                            setSelectPhn(e.target.value);
                                            console.log(selectPhn);
                                        }}
                                        value={selectPhn}
                                    />
                                </td>
                                <td><Button type="submit" onClick={handleSubmit}>Save</Button></td>
                                <td><Button type="submit" onClick={
                                    () => {
                                        setAdd(false)
                                    }
                                }>Cancel</Button></td>

                            </tr>
                        }
                    </tbody>
                </Table>
            </div>

        </div>
    )

}

export default Table3;
