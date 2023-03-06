import Header from "./header";
import Footer from "./footer";
import classes from "./layout.module.css";

function Layout(props) {
  return (
    <>
      <Header />
      <div className={classes.main_content}>{props.children}</div>

      <Footer />
    </>
  );
}

export default Layout;
