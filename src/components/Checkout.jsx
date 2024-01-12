import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useCartContext } from "./CartContext";

export default function Checkout() {
  const { isCheckoutVisible, closeCheckout, cartItems, clearCart } =
    useCartContext();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
  });

  // Formatting price
  const formatCur = function (amount) {
    return new Intl.NumberFormat("en-ng", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };

  // Formatting order string
  const orderData = function () {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    const amount = formatCur(total);

    let str = "";
    cartItems.forEach((item) => {
      str += `Image: ${item.imgURL}\n Name: ${item.name}\n Size: ${
        item.size
      }\n Price: ${formatCur(item.price)}\n\n\n`;
    });

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Create a form element
    const form = document.createElement("form");
    form.style.display = "none"; // Hide the form

    // Add hidden input fields for additional data
    Object.entries({ ...formData, message: str, total: amount }).forEach(
      ([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        form.appendChild(input);
      }
    );

    document.body.appendChild(form);

    // Use sendForm with the dynamically created form element
    emailjs.sendForm(serviceID, templateID, form, publicKey).then(
      (result) => {},
      (error) => {
        console.log(error.text);
      }
    );

    // Remove the form element after submission
    document.body.removeChild(form);
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    // Access form data from formData state
    orderData(); // Call orderData only once after initial render

    // Reset the form after submission
    setFormData({
      Username: "",
      email: "",
      phoneNumber: "",
      whatsappNumber: "",
    });

    setSubmitted(true);

    // Clear Cart items
    clearCart();

    // Clear console
    console.clear();
  };

  const handleClose = function () {
    closeCheckout();
    setSubmitted(false);
  };

  // Handle input changes and update the formData state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
            onClick={handleClose}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <form
          className={`${submitted ? "hidden" : "flex"} flex-col gap-4 xl:gap-6`}
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col gap-1 lg:text-lg xl:text-xl">
            Name:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="block border border-solid border-hero-desc h-8 p-2 focus:outline-none focus:border-2 xl:h-10"
              required
            />
          </label>
          <label className="flex flex-col gap-1 lg:text-lg xl:text-xl">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="block border border-solid border-hero-desc h-8 p-2 focus:outline-none focus:border-2 xl:h-10"
              required
            />
          </label>
          <label className="flex flex-col gap-1 lg:text-lg xl:text-xl">
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="block border border-solid border-hero-desc h-8 p-2 focus:outline-none focus:border-2 xl:h-10"
              required
            />
          </label>
          <label className="flex flex-col gap-1 lg:text-lg xl:text-xl">
            Whatsapp Number:
            <input
              type="tel"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleInputChange}
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

        <div className={submitted ? "block" : "hidden"}>
          <p className="xl:text-lg">
            Order completed successfully. We'll reach out to you via
            WhatsApp/Email. Thanks for shopping with us!
          </p>
        </div>
      </div>
      <div className="w-full h-full overflow-hidden fixed top-0 z-40 backdrop-blur-sm bg-shade"></div>
    </section>
  );
}
