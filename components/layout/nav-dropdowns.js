import NavDropdown from "react-bootstrap/NavDropdown";
import CustomNavLink from "../ui/custom-nav-link";
import classes from "./nav-dropdown.module.css";

function NavDropdowns(props) {
  return (
    <>
      {props.lists.map((list) => (
        <NavDropdown
          title={list.main_title}
          className={classes.nav_dropdown_title}
          key={list.slug1}
          id="basic-nav-dropdown"
        >
          {list.dropdowns.map((item) => (
            <CustomNavLink href={`${list.slug1}${item.slug2}`} key={item.slug2}>
              <NavDropdown.Item as="span">{item.title}</NavDropdown.Item>
            </CustomNavLink>
          ))}
        </NavDropdown>
      ))}
    </>
  );
}

export default NavDropdowns;
