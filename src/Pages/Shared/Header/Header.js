import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user,logOut} = useAuth();
    return (
        <>
            <Navbar sticky="top" bg="light" variant="light" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">Getaway</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#offers">Offers</Nav.Link>
      <Nav.Link as={HashLink} to="#pricing">Pricing</Nav.Link>
    {user?.email ?
      <Button onClick={logOut} variant="lignt">Logout</Button>:
      <Nav.Link as={Link} to="/login">Login</Nav.Link>}
      <Navbar.Text>
        Log in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>  
        </>
    );
};

export default Header;