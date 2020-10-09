import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import { Navbar, Nav, Form, Button } from 'react-bootstrap'

function Header({ heading }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">POLLING APP</Navbar.Brand>
      <Nav className="mr-auto">
      </Nav>
      <Form inline>
        <Link to='/login'>
          <Button variant="outline-success" className="mr-3"> LOGIN  </Button>
        </Link>
        <Link to='/signup'>
          <Button variant="outline-success"> SIGNUP  </Button>
        </Link>
      </Form>
    </Navbar>
  )
}
const headerClass = { background: 'skyblue', padding: "1%", fontSize: "1.5rem", marginTop: 0, }
export default Header