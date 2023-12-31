import { Link } from "react-router-dom";
export default function CategoryCard({ image, text, ctgy }) {
  const style = {
    backgroundImage: `linear-gradient(180deg, rgba(4,4,4,0.27494747899159666) 49%, rgba(4,4,4,0.908000700280112) 81%), url("${image}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <figure
      className="w-11/12 h-60 max-w-sm flex flex-col items-center justify-end p-3 sm:max-w-xl sm:h-80  lg:w-96 lg:max-w-sm lg:h-56 lg:mb-3 xl:w-100 xl:max-w-lg xl:h-80"
      style={style}
    >
      <div>
        <p className="text-white text-center text-base sm:text-lg font-bold xl:text-xl">
          {text}
        </p>
        <Link
          to={`/shop/${ctgy}`}
          className="mt-3 block bg-hero-desc text-white px-3 py-2 text-sm sm:text-base xl:text-lg hover:bg-hover-btn"
        >
          Shop now &rarr;
        </Link>
      </div>
    </figure>
  );
}
