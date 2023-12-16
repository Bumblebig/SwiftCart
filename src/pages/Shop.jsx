import { ProductCard } from "../components";

export default function Shop() {
  const items = [
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
    <ProductCard />,
  ];

  return (
    <section className="px-3 py-4 mt-5 sm:px-6 xl:px-9">
      <p className="text-right text-md mr-6 font-bold text-gray-600 lg:text-lg xl:text-xl">
        All
      </p>
      <div className="flex flex-wrap grid-rows-5 justify-evenly mt-6 gap-1 py-3 items-stretch">
        {items}
      </div>
    </section>
  );
}
