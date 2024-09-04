import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../images/footer.png";

function Footer() {
  return (
    <Navbar expand="lg" className="text-white nav-text">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#">
          <img src={logo} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="shadow-none border-0 "
        />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav
            className="mx-auto my-2 my-lg-0 "
            style={{ maxHeight: "500px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>
          <div className="text-white">
            <i class="bi bi-facebook"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;
