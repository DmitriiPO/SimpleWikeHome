import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container className="header">
          <Navbar.Brand>
             <h2>LogoBar</h2> 
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/"}>Главная</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/favorites"}>Избранное</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/cart"}>Корзина</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/description"}>Описание</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/about"}>О нас</Link>
            </Nav.Link>
          </Nav>
          <Button variant="primary">
            Войти
          </Button>
        </Container>
      </Navbar>
  )
}

export default Header