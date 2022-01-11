import React from "react";
import {
  Routes,
  Route,
} from 'react-router-dom';
import Add from "./Table2";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Welcome from "./Welcome";

const Flow = () => {
  return (

    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/Home" element={<Home />} />
      <Route exact path="/Signup" element={<Signup />} />
      <Route exact path="/Welcome" element={<Welcome />} />
      <Route exact path="/Add" element={<Add />} />
    </Routes>

  );
}

export default Flow;