import Cart from "./Cart";
import Logo from "./Logo";
import "./Header.css";

function Header(props) {
  return (
    <section className="header-container">
      <Logo />
      <Cart />
    </section>
  );
}
export default Header;
