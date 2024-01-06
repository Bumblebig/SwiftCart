import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  name,
  price,
  img,
  category,
  colName,
}) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const handleImageLoad = function () {
    setIsImageLoaded(true);
  };

  let errStyle, wrapperStyle;
  const handleLoadError = function () {
    errStyle = "display: block";
    wrapperStyle =
      "display: flex; align-items: center; justify-content: center;";
  };

  // format currency
  const amount = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",
  }).format(price);

  return (
    <Link
      to={`/product/${colName}/${id}`}
      className="w-48 max-w-xs box-content flex-shrink-0 md:cursor-pointer lg:w-72"
    >
      <div
        className={`block w-full rounded-t-md bg-gray-200 ${
          isImageLoaded ? "" : "h-48 lg:h-72 xl:h-64 2xl:h-80"
        }`}
        style={wrapperStyle}
      >
        <img
          src={img}
          alt={category}
          className="block w-full object-cover h-48 lg:h-72 rounded-t-md xl:h-64 2xl:h-80"
          onLoad={handleImageLoad}
          onError={handleLoadError}
        />
        <p
          className="text-center text-sm text-gray-600 hidden"
          style={errStyle}
        >
          Image could not be loaded
        </p>
      </div>
      <h3 className="price text-lg mt-6 px-2 lg:text-xl xl:text-2xl xl:mt-8 xl:px-4">
        {amount}
      </h3>
      <p className="text-xs text-gray-700 mt-1 px-2 pb-7 lg:text-base xl:text-lg xl:mt-2 xl:px-4 xl:pb-9">
        {name}
      </p>
    </Link>
  );
}
