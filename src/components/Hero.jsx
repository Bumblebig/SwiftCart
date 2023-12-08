// import heroBag from "../assets/hero-bag.png";

export default function Hero() {
  return (
    <header className="pb-12">
      <div>
        <h1 className="text-hero-heading text-3xl font-bold mt-10 mb-1 sm:mb-3 w-4/5 sm:w-8/12">
          Discover Unique Products Online
        </h1>
        <p className="text-hero-desc text-sm sm:text-base mb-4">
          Your One-Stop Shop for Quality Goods.
        </p>

        <p className="text-gray-700 leading-normal text-sm sm:text-base sm:w-11/12">
          Welcome to SwiftCart, where passion meets product. Our journey began
          with a vision to redefine the way you shop. Dive into a world of
          carefully curated items that reflect our commitment to quality, style,
          and innovation.
        </p>
        {/* <button className="mt-6 bg-gray-950 text-white px-3 py-2 text-sm rounded">Shop now &rarr;</button> */}
      </div>
    </header>
  );
}
