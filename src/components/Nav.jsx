import { Link } from "react-router-dom";
import { useSharedNavState } from "./SharedNavState";
import { useCartContext } from "./CartContext";

export default function Nav() {
  const { toggleMobileNav } = useSharedNavState();
  const { toggleCart } = useCartContext();

  return (
    <nav className="p-5 flex justify-between items-center lg:px-8 xl:py-8">
      <Link to="/" className="logo text-xl lg:text-2xl xl:text-3xl">
        SwiftCart
      </Link>

      <div className="hidden lg:flex items-center gap-8 xl:gap-9">
        <Link
          to="/shop"
          className="text-base cursor-pointer list-none xl:text-xl hover:font-bold"
        >
          Shop
        </Link>
        <Link
          to="/about"
          className="text-base cursor-pointer list-none xl:text-xl hover:font-bold"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="text-base cursor-pointer list-none xl:text-xl hover:font-bold"
        >
          Contact
        </Link>
        <li
          className="text-base cursor-pointer list-none xl:text-xl hover:font-bold"
          onClick={toggleCart}
        >
          Cart
        </li>
        <Link
          to="/login"
          className="text-base cursor-pointer list-none xl:text-xl hover:font-bold"
        >
          Admin
        </Link>
      </div>

      <div className="flex items-center gap-5 flex-shrink-0 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-7 h-8 hidden md:block"
          onClick={toggleCart}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-7 h-8"
          onClick={toggleMobileNav}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </div>
    </nav>
  );
}
