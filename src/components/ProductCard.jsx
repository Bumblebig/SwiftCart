import { useState } from "react";
import prodImage from "../assets/brown-sandals.jpg";

export default function ProductCard() {
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

  return (
    <figure className="w-3/6 max-w-sm box-content flex-shrink-0 sm:w-2/6 md:cursor-pointer lg:w-1/5">
      <div
        className={`block w-full rounded-t-md bg-gray-200 ${
          isImageLoaded ? "" : "h-60 xl:h-64 2xl:h-80"
        }`}
        style={wrapperStyle}
      >
        <img
          src={prodImage}
          alt="sandals"
          className="block w-full object-cover h-60 rounded-t-md xl:h-64 2xl:h-80"
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
      <h3 className="price text-xl mt-6 px-2 xl:text-2xl xl:mt-8 xl:px-4">
        ₦5,000.00
      </h3>
      <p className="text-sm text-gray-700 mt-1 px-2 pb-7 xl:text-lg xl:mt-2 xl:px-4 xl:pb-9">
        Bucaneer Sandals
      </p>
    </figure>
  );
}
