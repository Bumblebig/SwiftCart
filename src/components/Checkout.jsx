import { useCartContext } from "./CartContext";

export default function Checkout() {
  const { isCheckoutVisible, closeCheckout } = useCartContext();
  return (
    <section
      className={`w-full z-30 h-screen fixed top-0 overflow-auto ${
        isCheckoutVisible ? "visible" : "hidden"
      }`}
    >
      <div className="z-50 block fixed w-11/12 max-w-2xl mx-auto bg-white rounded p-6 px-8 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 overflow-auto">
        <div className="flex items-center justify-between mb-6 border-b pb-2">
          <h1 className="lg:text-lg xl:text-xl">Checkout</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            className="w-6 h-6 cursor-pointer xl:w-7 xl:h-7"
            onClick={closeCheckout}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <form className="flex flex-col gap-4 xl:gap-">
          <label className="flex flex-col gap-1 lg:text-lg xl:text-xl">
            Name:
            <input
              type="text"
              className="block border border-solid border-hero-desc h-8 p-2 focus:outline-none focus:border-2 xl:h-10"
              required
            />
          </label>
          <label className="flex flex-col gap-1 lg:text-lg xl:text-xl">
            Email:
            <input
              type="email"
              className="block border border-solid border-hero-desc h-8 p-2 focus:outline-none focus:border-2 xl:h-10"
              required
            />
          </label>
          <label className="flex flex-col gap-1 lg:text-lg xl:text-xl">
            Phone Number:
            <input
              type="tel"
              className="block border border-solid border-hero-desc h-8 p-2 focus:outline-none focus:border-2 xl:h-10"
              required
            />
          </label>
          <label className="flex flex-col gap-1 lg:text-lg xl:text-xl">
            Whatsapp Number:
            <input
              type="tel"
              className="block border border-solid border-hero-desc h-8 p-2 focus:outline-none focus:border-2 xl:h-10"
              required
            />
          </label>

          <input
            type="submit"
            className="text-white bg-hero-desc cursor-pointer py-1 lg:text-lg xl:text-xl hover:bg-hover-btn"
            value="Complete Checkout"
          />
        </form>
      </div>
      <div className="w-full h-full overflow-hidden fixed top-0 z-40 backdrop-blur-sm bg-shade"></div>
    </section>
  );
}