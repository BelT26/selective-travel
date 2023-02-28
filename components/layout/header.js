import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CustomNavLink from "../ui/custom-nav-link";
import classes from "./header.module.css";
import dropdownItems from "./dropdown_items";
import NavDropdowns from "./nav-dropdowns";

function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid className={classes.navbar_container}>
        <Navbar.Brand href="/">Selective Travel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as="span">
              <CustomNavLink href="/">Home</CustomNavLink>
            </Nav.Link>
            <Nav.Link as="span">
              <CustomNavLink href="/about">About Us</CustomNavLink>
            </Nav.Link>
            <NavDropdowns lists={dropdownItems} />

            {/* <NavDropdown title="Concierge" id="basic-nav-dropdown">
              <CustomNavLink href="/">
                <NavDropdown.Item as="span"></NavDropdown.Item>
              </CustomNavLink>
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <NavDropdown.Divider />
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
            </NavDropdown>
            <NavDropdown title="Coach Excursions" id="basic-nav-dropdown">
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <NavDropdown.Divider />
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
            </NavDropdown>
            <NavDropdown title="Boat Trips" id="basic-nav-dropdown">
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <NavDropdown.Divider />
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
            </NavDropdown>
            <NavDropdown title="Transport" id="basic-nav-dropdown">
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <NavDropdown.Divider />
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
            </NavDropdown>
            <NavDropdown title="Theme Parks" id="basic-nav-dropdown">
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
              <NavDropdown.Divider />
              <CustomNavLink href="/">
                <NavDropdown.Item as="span">Action</NavDropdown.Item>
              </CustomNavLink>
            </NavDropdown> */}
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
