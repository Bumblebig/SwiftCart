import CartItem from "./CartItem";
import { useCartContext } from "./CartContext";

export default function Cart() {
  const {
    isCartVisible,
    closeCart,
    toggleCheckout,
    cartItems,
    removeFromCart,
  } = useCartContext();

  const style = {
    visibility: `${isCartVisible ? "visible" : "hidden"}`,
    transform: `${isCartVisible ? "translateX(0%)" : "translateX(100%)"}`,
  };

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const amount = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",
  }).format(total);
  return (
    <aside
      className="fixed h-full top-0 right-0 z-20 px-5 pb-6 min-w-max bg-white w-9/12 pt-10 flex flex-col gap-8 justify-between transition ease-in-out md:w-3/6 lg:w-2/5 xl:w-1/3"
      style={style}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="black"
        className="w-7 h-7 absolute top-5 right-3 cursor-pointer"
        onClick={closeCart}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      <section className="w-full cart-item overflow-y-auto flex flex-col gap-3 p-1 pt-8 h-5/6">
        {cartItems.length >= 1 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              handleDelete={() => removeFromCart(item.id)}
            />
          ))
        ) : (
          <p className="text-base italic mt-6 text-gray-700 text-center lg:text-md">
            Empty
          </p>
        )}
      </section>

      <div>
        <div className="flex items-center justify-between font-bold mb-3">
          <h3 className="md:text-lg lg:text-xl">Total:</h3>
          <p className="md:text-lg lg:text-xl">{amount}</p>
        </div>
        <button
          className="text-white block w-full bg-hero-desc cursor-pointer py-2 lg:text-lg xl:text-xl hover:bg-hover-btn"
          onClick={() => {
            cartItems.length >= 1 && toggleCheckout();
          }}
        >
          Checkout
        </button>
      </div>
    </aside>
  );
}
