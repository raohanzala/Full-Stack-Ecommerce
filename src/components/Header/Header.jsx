import { useEffect, useState } from "react";
import HeaderSub from "./HeaderSub";
import NavBar from "./NavBar";
import Cart from "../Cart/Cart";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  // const [searchModal, setSearchModal] = useState(false);
  const [showCart, setShowCart] = useState(false)
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <header className={`w-full h-[8.5rem] ${scrolled ? "sticky" : ""} `}>
      <HeaderSub />
      <NavBar setShowCart={setShowCart} />
    </header>
    {showCart && <Cart setShowCart={setShowCart}/>}
    </>
  );
}

export default Header;
