import React from "react";
import { Navbar, Button, Collapse, Nav, NavItem, NavLink, NavbarText } from "reactstrap";
import { useState } from "react";
import Home from "./Home";
import Table1 from "./Table1";
import Table2 from "./Table2";
import College from "./College"
import RqEvent from "./RqEvent";
import PrimeTable from "./PrimeTable";

import { CgProfile } from "@react-icons/all-files/cg/CgProfile"
import Table3 from "./Table3";
import PrimeTable2 from "./PrimeTable2";







const Navi = (a) => {

    const [openHome, setOpenHome] = useState(true)
    const [openTable1, setOpenTable1] = useState(false)
    const [openTable2, setOpenTable2] = useState(false)
    const [openCollege, setOpenCollege] = useState(false)
    const [openEvent, setOpenEvent] = useState(false)
    const [openPrime, setOpenPrime] = useState(false)
    const [openTable3, setOpenTable3] = useState(false)
    const [openPrime2, setOpenPrime2] = useState(false)


    return (

        <div>
            <div id='navo'>
                <Navbar
                    color="secondary"
                    expand="md"
                    light
                >

                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                                <NavLink active={openHome} onClick={
                                    () => {
                                        setOpenHome(true)
                                        setOpenTable1(false)
                                        setOpenTable2(false)
                                        setOpenCollege(false)
                                        setOpenEvent(false)
                                        setOpenPrime(false)
                                        setOpenTable3(false)
                                        setOpenPrime2(false)
                                    }
                                } >
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active={openTable1} onClick={
                                    () => {
                                        setOpenTable1(true)
                                        setOpenHome(false)
                                        setOpenTable2(false)
                                        setOpenCollege(false)
                                        setOpenEvent(false)
                                        setOpenPrime(false)
                                        setOpenTable3(false)
                                        setOpenPrime2(false)
                                    }
                                } >
                                    Table1
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active={openTable2} onClick={
                                    () => {
                                        setOpenTable2(true)
                                        setOpenTable1(false)
                                        setOpenHome(false)
                                        setOpenCollege(false)
                                        setOpenEvent(false)
                                        setOpenPrime(false)
                                        setOpenTable3(false)
                                        setOpenPrime2(false)
                                    }
                                }  >
                                    Table2
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active={openCollege} onClick={
                                    () => {
                                        setOpenTable2(false)
                                        setOpenTable1(false)
                                        setOpenHome(false)
                                        setOpenCollege(true)
                                        setOpenEvent(false)
                                        setOpenPrime(false)
                                        setOpenTable3(false)
                                        setOpenPrime2(false)
                                    }
                                }  >
                                    college
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active={openEvent} onClick={
                                    () => {
                                        setOpenTable2(false)
                                        setOpenTable1(false)
                                        setOpenHome(false)
                                        setOpenCollege(false)
                                        setOpenEvent(true)
                                        setOpenPrime(false)
                                        setOpenTable3(false)
                                        setOpenPrime2(false)
                                    }
                                }  >
                                    Events
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active={openPrime} onClick={
                                    () => {
                                        setOpenTable2(false)
                                        setOpenTable1(false)
                                        setOpenHome(false)
                                        setOpenCollege(false)
                                        setOpenEvent(false)
                                        setOpenPrime(true)
                                        setOpenTable3(false)
                                        setOpenPrime2(false)
                                    }
                                }  >
                                    PrimeTable
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active={openTable3} onClick={
                                    () => {
                                        setOpenTable2(false)
                                        setOpenTable1(false)
                                        setOpenHome(false)
                                        setOpenCollege(false)
                                        setOpenEvent(false)
                                        setOpenPrime(false)
                                        setOpenTable3(true)
                                        setOpenPrime2(false)
                                    }
                                }  >
                                    Table3
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active={openPrime2} onClick={
                                    () => {
                                        setOpenTable2(false)
                                        setOpenTable1(false)
                                        setOpenHome(false)
                                        setOpenCollege(false)
                                        setOpenEvent(false)
                                        setOpenPrime(false)
                                        setOpenTable3(false)
                                        setOpenPrime2(true)
                                    }
                                }  >
                                    PrimeTable2
                                </NavLink>
                            </NavItem>


                        </Nav>
                        <NavbarText>
                            HEllo {a.Name} <Button type="submit" id="prog" href="/Signup" style={{ borderRadius: 30 }}> <CgProfile /></Button>
                        </NavbarText>
                    </Collapse>
                </Navbar>
            </div>
            {
                openHome && <Home />
            }
            {
                openTable1 && <Table1 />
            }
            {
                openTable2 && <Table2 />
            }
            {
                openCollege && <College />
            }
            {
                openEvent && <RqEvent />
            }
            {
                openPrime && <PrimeTable />
            }
            {
                openTable3 && <Table3 />
            }
            {
                openPrime2 && <PrimeTable2 />
            }
        </div>

    )
}

export default Navi;