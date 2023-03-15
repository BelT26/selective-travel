import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CustomNavLink from "../ui/custom-nav-link";
import classes from "./header.module.css";
import dropdownItems from "./dropdown_items";
import NavDropdowns from "./nav-dropdowns";
import { FaConciergeBell } from "react-icons/fa";

function Header() {
  return (
    <Navbar style={{ backgroundColor: "black" }} expand="lg" variant="dark">
      <Container fluid className={classes.navbar_container}>
        <Navbar.Brand href="/">
          TOP CONCIERGE <FaConciergeBell />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link as="span">
              <CustomNavLink href="/">Home</CustomNavLink>
            </Nav.Link>
            <Nav.Link as="span">
              <CustomNavLink href="/about">About Us</CustomNavLink>
            </Nav.Link> */}
            <NavDropdowns lists={dropdownItems} />

            <Nav.Link as="span">
              <CustomNavLink href="/contact">Contact</CustomNavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
