import ProductCard from "./ProductCard";

export default function Featured() {
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
  ];

  return (
    <section className="mb-9 lg:mb-16 xl:mb-20">
      <h2 className="mb-8 font-bold sm:text-lg xl:text-2xl 2xl:mb-12">
        Featured Products
      </h2>

      <div className="w-full flex mx-auto featured-item overflow-x-auto gap-5 lg:gap-6">
        {items}
      </div>
    </section>
  );
}
