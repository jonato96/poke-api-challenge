import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const navbar = ()=>{
    return(
        <>
      <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
                <img
                src="/src/assets/bot.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Logo"
            />
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="https://jonato96.github.io/tarjeta/" target="_blank">Sobre mi</Nav.Link>
            <Nav.Link href="https://jonato96.github.io/tarjeta/" target="_blank">Contacto</Nav.Link>            
          </Nav>
        </Container>
      </Navbar>      
    </>
    )        
}

export default navbar;