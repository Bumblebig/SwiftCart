import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { collection, getDocs } from "firebase/firestore";
import { useCartContext } from "../components/CartContext";
import { db } from "../firebase-config";

export default function ProductDetails() {
  const [prod, setProd] = useState({});
  const [loading, setLoading] = useState(true);
  const [idExists, setIdExists] = useState(false);
  const { toggleCart, addToCart, cartItems } = useCartContext();
  const { colName, id } = useParams();

  useEffect(() => {
    async function getProduct() {
      try {
        setLoading(true);
        const colRef = collection(db, colName);

        const snapshot = await getDocs(colRef);
        const data = snapshot.docs.map((snap) => {
          return { ...snap.data(), id: snap.id };
        });

        const [match] = data.filter((item) => item.id === id);
        setProd(match);
      } catch (error) {
        console.error("error: ", error.message);
      } finally {
        setLoading(false);
      }
    }

    getProduct();
  }, []);

  const { name, description, imageURL, price, sizes } = prod;

  // Format currency
  const amount = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",
  }).format(price);

  // implement active size
  const [activeSize, setActiveSize] = useState(
    Array.isArray(sizes) && sizes.length > 0 ? sizes[0] : null
  );
  const [infoState, setInfoState] = useState(true);

  const handleSizeClick = (size) => {
    setActiveSize(size);
    setInfoState(true);
  };

  const handleAddToCart = () => {
    if (activeSize) {
      const cartItem = {
        id: prod.id,
        imgURL: imageURL,
        name: name,
        price: price,
        size: activeSize, // Assuming activeSize is the selected size
      };

      // Check if item is in cart already before adding
      let idCheck;

      /*  check for item in cart to set initial state of idCheck
       *  loop over and break if any is false not to get state overriden by other items
       */
      if (cartItems.length >= 1) {
        for (let i = 0; i < cartItems.length; i++) {
          if (cartItems[i].id === cartItem.id) {
            idCheck = false;
            break;
          } else {
            idCheck = true;
          }
        }
      } else idCheck = true;

      // Pass the cart item to the addToCart function
      if (idCheck) {
        // toggle state for double entry message
        setIdExists(false);

        // add item to cart
        addToCart(cartItem);

        // show cart
        toggleCart();
      } else {
        // toggle state for double entry message
        setIdExists(true);

        // timeout to toggle off the message
        setTimeout(function () {
          setIdExists(false);
        }, 4000);
      }
    } else {
      setInfoState(false);
    }
  };

  return (
    <section className="px-5 py-5 h-full overflow-y-auto sm:px-7 lg:pb-14 xl:px-10">
      {loading ? (
        <TailSpin
          visible={true}
          height="60"
          width="60"
          color="#bb9457"
          ariaLabel="tail-spin-loading"
          radius="3"
          wrapperStyle={{}}
          wrapperClass="mx-auto my-20"
          className="mx-auto inline-block relative left-1/2 -translate-x-1/2"
        />
      ) : (
        <>
          <p
            className={`w-max py-2 px-2 fixed top-12 z-50 bg-white left-2/4 -translate-x-2/4 shadow-md rounded-md text-base transition-all lg:text-xl 2xl:text-2xl ${
              infoState ? "opacity-0" : "opacity-100"
            }`}
          >
            Select a size
          </p>

          <p
            className={`w-max py-2 px-2 fixed top-12 z-50 bg-white left-2/4 -translate-x-2/4 shadow-md rounded-md text-base transition-all lg:text-xl 2xl:text-2xl ${
              idExists ? "opacity-100" : "opacity-0"
            }`}
          >
            Item already in cart
          </p>
          <div className="w-full flex flex-col gap-3 lg:flex-row lg:items-start lg:grid-cols-2 lg:flex-shrink-0 lg:flex-grow-0 lg:mt-8 lg:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-5xl xl:gap-10 2xl:max-w-6xl">
            <figure className="lg:w-2/3">
              <div className="w-5/6 mx-auto bg-gray-200 mb-8 h-120 sm:w-4/6 sm:h-96 lg:w-full lg:h-100 2xl:h-120">
                <img
                  src={imageURL}
                  alt="prod-img"
                  className="block w-full h-full object-cover sm:h-96 lg:h-100 2xl:h-120"
                />
              </div>
              <div className="ml-5 lg:ml-1">
                <p className="text-xl mb-2">{name}</p>
                <p className="text-3xl font-bold mb-6">{amount}</p>
              </div>
            </figure>
            <figure className="ml-5 lg:w-1/2 lg:ml-1 lg:pt-10">
              <h2 className="text-md mb-1 font-bold lg:text-xl 2xl:text-2xl 2xl:mb-3">
                Descriptions
              </h2>
              <p className="text-gray-600 mb-3 lg:mb-6 lg:text-lg 2xl:text-xl 2xl:mb-12">
                {description}
              </p>

              <h2 className="text-md font-bold mb-1 lg:text-xl 2xl:text-2xl 2xl:mb-3">
                Size
              </h2>
              <ul className="flex items-stretch gap-3">
                {Array.isArray(sizes) &&
                  sizes.map((size) => (
                    <li
                      key={size}
                      className={`${
                        activeSize === size
                          ? "border border-gray-800"
                          : "border-none focus:bg-none"
                      } bg-gray-100 px-3 py-1 cursor-pointer 2xl:text-lg`}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </li>
                  ))}
              </ul>

              <button
                className="block mt-10 bg-hero-desc w-11/12 mx-auto text-center text-white px-3 py-2 text-sm sm:text-base xl:text-xl xl:mt-16 hover:bg-hover-btn lg:w-full lg:mt-16"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </figure>
          </div>
        </>
      )}
    </section>
  );
}
