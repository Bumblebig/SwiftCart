import { useSharedState } from "./SharedNavState";

export default function MobileNav() {
  const { isMobileNavVisible, toggleMobileNav } = useSharedState();
  const style = {
    visibility: `${isMobileNavVisible ? "visible" : "hidden"}`,
    transform: `${isMobileNavVisible ? "translateX(0%)" : "translateX(100%)"}`,
  };

  return (
    <aside
      className="fixed h-full top-0 right-0 z-20 bg-white w-2/4 pt-24 flex flex-col gap-6 transition ease-in-out"
      style={style}
    >
      <li
        className="list-none text-lg cursor-pointer pl-7"
        onClick={() => toggleMobileNav()}
      >
        Shop
      </li>
      <li
        className="list-none text-lg cursor-pointer pl-7"
        onClick={() => toggleMobileNav()}
      >
        About Us
      </li>
      <li
        className="list-none text-lg cursor-pointer pl-7"
        onClick={() => toggleMobileNav()}
      >
        Contact
      </li>
      <li
        className="list-none text-lg cursor-pointer pl-7 md:hidden"
        onClick={() => toggleMobileNav()}
      >
        Cart
      </li>
    </aside>
  );
}
