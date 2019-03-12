// Import react-bootstrap components
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

// Import override css
import "./override.css"

function NavBar(props) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        { props.hideBrandName ? <></> : <Navbar.Brand>adomer</Navbar.Brand>}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link href="https://github.com/zrheaume/adomer"> adomer docs </Nav.Link>
            <Nav.Link href="https://www.npmjs.com/package/adomer-toolkit">ATK</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {props.user? <em>{props.user}</em> : <></>}
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}


export default NavBar