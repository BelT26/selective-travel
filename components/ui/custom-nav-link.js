import classes from "./custom-nav-link.module.css";
import Link from "next/link";

function CustomNavLink({ href, children }) {
  return (
    <Link
      className={classes.custom_link}
      href={href}
      style={{ textDecoration: "none", color: "whitesmoke" }}
    >
      {children}
    </Link>
  );
}

export default CustomNavLink;
