import { Link } from "react-router-dom";
import { useSharedNavState } from "./SharedNavState";
import { useCartContext } from "./CartContext";

export default function MobileNav() {
  const { isMobileNavVisible, toggleMobileNav } = useSharedNavState();
  const { toggleCart } = useCartContext();
  const style = {
    visibility: `${isMobileNavVisible ? "visible" : "hidden"}`,
    transform: `${isMobileNavVisible ? "translateX(0%)" : "translateX(100%)"}`,
  };

  return (
    <aside
      className="fixed h-full top-0 right-0 z-20 bg-white w-3/5 pt-24 flex flex-col gap-6 transition ease-in-out md:w-3/6"
      style={style}
    >
      <Link
        to={`/shop/${"All"}`}
        className="list-none text-lg cursor-pointer pl-7"
        onClick={() => toggleMobileNav()}
      >
        Shop
      </Link>
      <Link
        to="/about"
        className="list-none text-lg cursor-pointer pl-7"
        onClick={() => toggleMobileNav()}
      >
        About Us
      </Link>
      <Link
        to="/contact"
        className="list-none text-lg cursor-pointer pl-7"
        onClick={() => toggleMobileNav()}
      >
        Contact
      </Link>
      <li
        className="list-none text-lg cursor-pointer pl-7 md:hidden"
        onClick={() => {
          toggleMobileNav();
          toggleCart();
        }}
      >
        Cart
      </li>
      <Link
        to="/login"
        className="list-none text-lg cursor-pointer pl-7"
        onClick={() => {
          toggleMobileNav();
        }}
      >
        Admin
      </Link>
    </aside>
  );
}
