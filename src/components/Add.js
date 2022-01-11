import React from "react";
import { Form, Modal, FormGroup, ModalHeader, ModalBody, Label, Button, Input, } from "reactstrap";







const Add = (props) => {



    return (
        <div>
            <div>
                <Modal isOpen={props.open} >
                    <ModalHeader toggle={
                        () => {
                            props.close(false)
                        }
                    } >
                        {props.mode}
                    </ModalHeader>
                    <ModalBody>
                        <Form inline  >
                            <FormGroup>
                                <Label className="l1" for="label1">{props.label1}</Label>
                                {props.label1 === "userName" ? (
                                    <Input id="label1"
                                        name="userName"
                                        placeholder="Enter  userName"
                                        type="text"
                                        required="required"
                                        value={props.list["userName"]}
                                        //autoComplete="off"
                                        valid={props.validName}
                                        invalid={props.invalidName}
                                        onChange={(e) => props.handleListChange(e, "userName")} />)

                                    :
                                    (<Input id="label1"
                                        name="Name"
                                        placeholder="Enter name"
                                        type="text"
                                        required="required"
                                        value={props.list["Name"]}
                                        //autoComplete="off"
                                        onChange={(e) => props.handleListChange(e, "Name")}
                                    />)
                                }

                            </FormGroup>

                            <FormGroup>
                                <Label className="l2" for="label2">{props.label2}</Label>
                                {props.label2 === "Role" ? (
                                    <Input id="label2"
                                        name="role"
                                        placeholder="Who are you?"
                                        type="text" required="required"
                                        value={props.list["role"]}
                                        //autoComplete="off"
                                        valid={props.validRole}
                                        invalid={props.invalidRole}
                                        onChange={(e) => props.handleListChange(e, "role")}
                                    />)

                                    :
                                    (<FormGroup>

                                        <FormGroup check inline>
                                            <Input
                                                type="radio"
                                                name="Gender"
                                                value={["Male"]}
                                                id="label2"
                                                onChange={(e) => props.handleListChange(e, "Gender")}
                                            />
                                            <Label check>
                                                Male
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Input
                                                type="radio"
                                                name="Gender"
                                                value={["Female"]}
                                                id="label2"
                                                onChange={(e) => props.handleListChange(e, "Gender")}
                                            />
                                            <Label check>
                                                Female
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Input
                                                type="radio"
                                                name="Gender"
                                                value={["Other"]}
                                                id="label2"
                                                onChange={(e) => props.handleListChange(e, "Gender")}
                                            />
                                            <Label check>
                                                Other
                                            </Label>
                                        </FormGroup>
                                    </FormGroup>)
                                }

                            </FormGroup>


                            <FormGroup>
                                <Label className="l3" for="label3">{props.label3}</Label>
                                {props.label3 === "phoneNumber" ? (<Input id="label1"
                                    name="phnNumber"
                                    placeholder="call me @"
                                    type="text"
                                    required="required"
                                    value={props.list["phnNumber"]}
                                    //autoComplete="off"
                                    valid={props.validPhnno}
                                    invalid={props.invalidPhnno}
                                    onChange={(e) => props.handleListChange(e, "phnNumber")}
                                />)

                                    :
                                    (<select
                                        id="label3"
                                        name="mode"
                                        onChange={(e) => props.handleListChange(e, "mode")}
                                        type="select"
                                    >
                                        <option
                                            value="Online"
                                        >
                                            Online
                                        </option>
                                        <option
                                            value="Offline"
                                        >
                                            Offline
                                        </option>

                                    </select>)
                                }
                            </FormGroup>

                            <FormGroup>
                                <Label className="l4" for="label4">{props.label4}</Label>
                                {props.label4 === "Email" ? (
                                    <Input id="label4"
                                        name="email"
                                        placeholder="mail id is"
                                        type="email"
                                        required="required"
                                        value={props.list["email"]}
                                        valid={props.validEmail}
                                        invalid={props.invalidEmail}
                                        //autoComplete=closeModal"off"
                                        onChange={(e) => props.handleListChange(e, "email")}
                                    />)

                                    : (
                                        <select
                                            name="city"
                                            id="city"
                                            type="select" multiple
                                            onChange={(e) => props.handleListChange(e, "email")}>
                                            <option value='Hyderabad'>
                                                Hyderabad
                                            </option>
                                            <option value='Bengulur'>
                                                Bengulur
                                            </option>
                                            <option value="Nirmal">
                                                Nirmal
                                            </option>
                                            <option value='vizag'>
                                                vizag
                                            </option>
                                            <option value='Dudhkashi'>
                                                Dhudhkashi
                                            </option>
                                        </select>)

                                }

                            </FormGroup>







                            {props.mode === "Add" ? (<Button type="submit" color="primary" /*disabled={
                                    list.userName.length < 1 || list.role.length < 1 || list.phnNumber.length < 1 || list.email.length < 1
                                }*/ onClick={props.handleSubmit} > submit </Button>) : (<Button type="submit" color="primary" /*disabled={
                                    list.userName.length < 1 || list.role.length < 1 || list.phnNumber.length < 1 || list.email.length < 1
                                }*/ onClick={props.handleFormSubmit} > submit </Button>)}
                        </Form>

                    </ModalBody>




                </Modal>
            </div>

        </div>

    )
}
export default Add;