import React from "react";

import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" className="mb-5">
        <Navbar.Brand href="#home">
            <h3 className="ml-3 mt-2"><i className="fas fa-laptop-code"></i> Developer Online Training </h3>
            </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Created By: <a href="#login">Lisa Copeland</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
