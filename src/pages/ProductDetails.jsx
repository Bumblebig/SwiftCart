import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useCartContext } from "../components/CartContext";
import { db } from "../firebase-config";
import productIMG from "../assets/brown-sandals.jpg";

export default function ProductDetails() {
  const [prod, setProd] = useState({});
  const { toggleCart } = useCartContext();
  const { colName, id } = useParams();

  useEffect(() => {
    async function getProduct() {
      try {
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
  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  console.log(activeSize);

  return (
    <section className="px-5 py-5 min-h-screen sm:px-7 lg:pb-14 xl:px-10">
      <div className="w-full flex flex-col gap-3 lg:flex-row lg:items-start lg:grid-cols-2 lg:flex-shrink-0 lg:flex-grow-0 lg:mt-8 lg:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-5xl xl:gap-10 2xl:max-w-6xl">
        <figure className="lg:w-2/3">
          <div className="w-5/6 mx-auto bg-gray-200 mb-8 h-80 sm:w-4/6 sm:h-96 lg:w-full lg:h-100 2xl:h-120">
            <img
              src={imageURL}
              alt="prod-img"
              className="block w-full h-80 object-cover sm:h-96 lg:h-100 2xl:h-120"
            />
          </div>
          <div className="ml-5 lg:ml-1">
            <p className="text-xl mb-2">{name}</p>
            <p className="text-3xl font-bold mb-2">{amount}</p>
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
            className="block mt-6 bg-hero-desc w-max text-center text-white px-3 py-2 text-sm sm:text-base xl:text-xl xl:mt-16 hover:bg-hover-btn lg:w-full lg:mt-16"
            onClick={toggleCart}
          >
            Add to Cart
          </button>
        </figure>
      </div>
    </section>
  );
}
