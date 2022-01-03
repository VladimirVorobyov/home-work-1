import React from "react";
import { Navbar } from "react-bootstrap";

export const Footer = () => {
  return (
    <div>
      <br />
      <Navbar bg="light" style={{ paddingLeft: 20 }}>
        <Navbar.Brand href="#home">My site (c) 2021</Navbar.Brand>
      </Navbar>
    </div>
  );
};
