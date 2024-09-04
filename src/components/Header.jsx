import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/logo.png";

function Header() {
  return (
    <Navbar expand="lg" className="">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#">
          <img src={logo} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="shadow-none border-0"
        />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav
            className="mx-auto my-2 my-lg-0 "
            style={{ maxHeight: "500px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>
          <div>
            <Button variant="btn btn-primary">Search</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
