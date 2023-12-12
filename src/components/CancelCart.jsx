import { useCartContext } from "./CartContext";

export default function Cancelcart() {
  const { isCartVisible, closeCart } = useCartContext();
  return (
    <div
      className={`w-full h-full overflow-hidden fixed top-0 z-10 backdrop-blur-sm bg-shade ${
        isCartVisible ? "visible" : "hidden"
      }`}
      onClick={closeCart}
    ></div>
  );
}
